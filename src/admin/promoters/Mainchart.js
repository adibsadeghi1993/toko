import React from 'react'
import Top from './Top'
import Tree from 'react-d3-tree'
import '../../App.css'


import { ReactComponent as Person } from '../../shared/icons/person.svg'
import { ReactComponent as People } from '../../shared/icons/people.svg'
import { ReactComponent as Graph } from '../../shared/icons/chart.svg'
import { ReactComponent as Card } from '../../shared/icons/card.svg'
import { ReactComponent as Trash } from '../../shared/icons/trash.svg'
import { ReactComponent as Edit } from '../../shared/icons/edit.svg'
import { Link } from 'react-router-dom'

const orgChart = {
    department: 'Tooko',
    attributes: {
        name: 'توکو',
        percent: '0%'
      },
    children: [
        
      {
        department: 'مدیر ارشد فروش',
        attributes: {
            name: 'امیر همایون وفادار مقدم',
            phone: '09127249735',
            color: 'green',
            percent: '13.5%'
        },
        children: [
          {
            department: 'مشاور فروش',
            attributes: {
                name: 'شقایق دهقان',
                phone: '09127249735',
                color: 'purple',
                percent: '13.5%'
            },
          },
          {
            department: 'مشاور فروش',
            attributes: {
                name: 'شقایق دهقان',
                phone: '09127249735',
                color: 'purple',
                percent: '13.5%'
              },
          },
        ],
      },
      {
        department: 'مدیر ارشد فروش',
        attributes: {
            name: 'شقایق دهقان',
            phone: '09127249735',
            color: 'green',
            percent: '13.5%'
        },
        children: [
          {
            department: 'مشاور فروش',
            attributes: {
                name: 'شقایق دهقان',
                phone: '09127249735',
                color: 'purple',
                percent: '13.5%'
            },
          },
          {
            department: 'مشاور فروش',
            attributes: {
                name: 'شقایق دهقان',
                phone: '09127249735',
                color: 'purple',
                percent: '13.5%'
              },
          },
        ],
      },
      {
        department: 'مدیر ارشد فروش',
        attributes: {
            name: 'شقایق دهقان',
            phone: '09127249735',
            color: 'green',
            percent: '13.5%'
        },
        children: [
          {
            department: 'مشاور فروش',
            attributes: {
                name: 'شقایق دهقان',
                phone: '09127249735',
                color: 'purple',
                percent: '13.5%'
            },
          },
          {
            department: 'مشاور فروش',
            attributes: {
                name: 'شقایق دهقان',
                phone: '09127249735',
                color: 'purple',
                percent: '13.5%'
              },
          },
        ],
      },
    ],
  };


  const renderRectSvgNode = ({ nodeDatum, toggleNode }) => (
    
    <g>
      <rect width="130" height="70" x="-65" onClick={toggleNode} fill={nodeDatum.attributes.color ? nodeDatum.attributes.color : '#2563EB'} strokeWidth='.1' rx="5" style={{borderRadius:'5px'}} />
      {nodeDatum.attributes?.percent && (
        <text fill="white" x="15" dy="15" style={{fontSize:'9px'}} strokeWidth=".1" onClick={toggleNode}>
            {nodeDatum.attributes?.percent}
        </text>
      )}
      <text fill="white" strokeWidth=".01" x="25" y='30' style={{fontSize:'9px'}} onClick={toggleNode}>
        {nodeDatum.department + " : "}
      </text>
      {nodeDatum.attributes?.name && (
        <text fill="white" x="30" dy="45" style={{fontSize:'9px'}} strokeWidth=".01" onClick={toggleNode}>
            {nodeDatum.attributes?.name}
        </text>
      )}
      {nodeDatum.attributes?.phone && (
        <text fill="white" x="25" dy="60" style={{fontSize:'9px'}} strokeWidth=".01" onClick={toggleNode}>
            {nodeDatum.attributes?.phone}
        </text>
      )}
    </g>)
    

function Mainchart() {
    return (
        <>

        <Top />

        <div className='relative top-0 z-30 w-full px-30 -mt-72 shadow-lg'>
            <div className='card flex flex-col min-h-screen'>
                <div className='card-header py-5 px-4 border-b border-gray-100'>
                    <div className='flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0'>
                        <h3 className='text-primary-color pr-3 font-bold text-otherCaption  text-center lg:text-right'></h3>
                        <div className='flex flex-col md:flex-row items-center '>
                            <div className='flex items-center'>
                                <div class="tooltip mx-1">
                                    <Link to='/members/details'><Person /></Link>
                                    <span class="tooltiptext">غیرفعال</span>
                                </div>                                    
                                <div class="tooltip mx-1">
                                    <Link to='/members/family'><People /></Link>
                                    <span class="tooltiptext">خانواده من</span>
                                </div>
                                <div class="tooltip mx-1">
                                    <Link to='/members/chart'><Graph /></Link>
                                    <span class="tooltiptext">مشاهده چارت</span>
                                </div>
                                <div class="tooltip mx-1">
                                    <Edit />
                                    <span class="tooltiptext">دسترسی ها</span>
                                </div>
                                <div class="tooltip mx-1">
                                    <Link to='/members/transactions'><Card /></Link>
                                    <span class="tooltiptext">تراکنش ها</span>
                                </div>
                            </div>

                            <Link to='/members'>
                                <button class="bg-blue-600 hover:bg-blue-800 text-white font-bold py-2 my-2 px-3 text-xs rounded">
                                بازگشت به لیست
                                </button>
                            </Link>
                        </div>
                    </div>
                </div>

                <div id="treeWrapper" className='h-96 border border-blue-300 m-5 rounded'>
                    <Tree 
                    data={orgChart}
                    orientation="vertical"
                    renderCustomNodeElement={renderRectSvgNode}
                      />
                </div>
            </div>
        </div>

        </>
    )
}

export default Mainchart
