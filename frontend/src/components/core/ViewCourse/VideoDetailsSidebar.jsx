import React, { useEffect } from 'react'
import { useState } from 'react';
import { useSelector } from 'react-redux';
import { useLocation, useNavigate, useParams } from 'react-router-dom'
import { FaAngleLeft } from "react-icons/fa6";
import { IoChevronDown } from "react-icons/io5";

const VideoDetailsSidebar = ({ setReviewModal }) => {

  const navigate = useNavigate();
  const location = useLocation();

  const [activeStatus, setActiveStatus] = useState("");
  const [videoBarActive, setVideoBarActive] = useState("");

  const { sectionId, subSectionId } = useParams();

  const {
    courseSectionData,
    courseEntireData,
    completedLectures,
    totalNoOfLectures,
  } = useSelector((state) => state.viewCourse);


  useEffect(() => {

    const setActiveFlags = async () => {

      if (!courseSectionData.length) {
        return;
      }

      const currentSectionIndex = courseSectionData.findIndex(
        (data) => data._id === sectionId
      )

      const currentSubSectionIndex = courseSectionData[currentSectionIndex]?.subSection.findIndex((data) =>
        data._id === subSectionId
      )

      const activeSubSectionId = courseSectionData[currentSectionIndex]?.subSection?.[currentSubSectionIndex]?._id;

      //set current section here

      setActiveStatus(courseSectionData[currentSectionIndex]?._id);

      //set current subSection here

      setVideoBarActive(activeSubSectionId);

    }

    setActiveFlags();

  }, [courseSectionData, courseEntireData, location.pathname]);



  return (
    <>

      <div className='flex  flex-col  xlg:min-w-[320px] lg:min-w-[310px] xmd:min-w-[300px] w-[280px]   h-[calc(99vh-3.5rem)] bg-richblack-800 py-4 '>


        {/* --------------- Button and review button -------------------- */}
        <div className='flex justify-between px-4 items-center mb-4'>

          {/* ---------Back button --------- */}

          <div onClick={() => {
            navigate("/dashboard/enrolled-courses")
          }} className='w-[30px] aspect-square rounded-full flex items-center justify-center bg-richblack-500'>
            <FaAngleLeft />
          </div>


          {/* ------------ review button ---------- */}

          <div>
            <button
              onClick={() => setReviewModal(true)}
              className='bg-yellow-50 py-2 mb-2 px-5 font-semibold rounded-lg  text-richblack-900 text-[16px] shadow-md hover:shadow-richblack-700 transition-shadow duration-300'>
              Add Review
            </button>

          </div>

        </div>

        {/* ----------------- heading and lectures ----------------------- */}

        <div className='px-4 mb-5'>
          {/* --------- heading --------- */}
          <h2 className='font-semibold text-richblack-5 text-lg mb-1'>
            {courseEntireData?.courseName}
          </h2>

          {/* ----------- lectures --------- */}
          <p className='text-sm text-richblack-300'>
            {completedLectures.length} / {totalNoOfLectures}
          </p>
        </div>

        {/* --------------------- Section and SubSection ------------------------- */}

        <div className='w-[90%] mx-auto h-[1px] bg-richblack-600 mb-3'></div>

        <div className='flex flex-col gap-y-2'>
          {
            courseSectionData.map((section, index) => (



              <div
                key={index}
                className='gap-y-3'
                onClick={() => setActiveStatus(section?._id)}>

                {/* ------------------Sections ----------------------- */}



                <div className='flex justify-between cursor-pointer px-4 bg-richblack-600 border border-richblack-700 py-3 '>

                  {/* ----------- Section name -------------- */}

                  <p className='tracking wide font-semibold'>
                    {
                      section?.sectionName
                    }

                  </p>

                  {/* ------------ dropdown arrow ------------- */}

                  <i
                       className={ `transition-all duration-300 ${activeStatus === section?._id ? "rotate-180 transition-[rotate] duration-400": "rotate-0"} `}
                    >
                        <IoChevronDown />
                    </i>

                </div>


                {/* --------------- SubSection container -------------------------- */}

                <div>
                  {
                    //only shows those subSection which section is active
                    activeStatus === section._id && (
                      <div className="transition-[height] duration-500 ease-in-out">
                        {
                          section.subSection.map((subSection , index) => (

                            // --------- SubSection -----------

                            <div className={` cursor-pointer py-2 px-2
                            ${
                              videoBarActive === subSection._id ? "bg-yellow-200 text-richblack-900" : "bg-richblack-900 text-richblack-5"
                            }
                            `}
                            key={index}

                            onClick={()=> {
                              navigate(
                              `/view-course/${courseEntireData?._id}/section/${section?._id}/sub-section/${subSection?._id}`)
                              // setActiveStatus(subSection._id);

                            }}
                            >

                              <div className='px-8 flex gap-x-2 items-center'>

                              <input
                              type='checkbox'
                              checked={completedLectures.includes(subSection?._id)}
                              onChange={()=> {}}
                               />

                               <p>
                                {
                                  subSection.title
                                }
                               </p>

                              </div>
                              
                         

                            </div>
                          ))
                        }

                      </div>
                    )
                  }
                </div>





              </div>
            ))
          }
        </div>

      </div>

    </>
  )
}

export default VideoDetailsSidebar