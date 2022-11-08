import React from 'react';
import { ChartComponent, SeriesCollectionDirective, SeriesDirective, Inject, Legend, Tooltip, Category, ColumnSeries, DataLabel } from '@syncfusion/ej2-react-charts';
import { ChartsHeader } from '../../components';
import { barCustomSeries, barPrimaryXAxis, barPrimaryYAxis } from '../../data/dummy';
import { useStateContext } from '../../contexts/ContextProvider';


export default function Bar() {
  const { currentMode } = useStateContext();
  return (
    <div className='m-4 md:m-10 mt-24 p-10 bg-white dark:bg-secondary-dark-bg rounded-3xl'>
      <ChartsHeader  category='Bar' title="Olympic Medal Counts - RIO"/>
      <div className='w-full'>
        <ChartComponent
          id='charts'
          primaryXAxis={barPrimaryXAxis}
          primaryYAxis={barPrimaryYAxis}
          chartArea={{border: {width: 0}}}
          tooltip={{ enable: true }}
          background={currentMode === 'Dark' ? '#33373E' : '#FFFFFF'}
          legendSettings={{ background: 'white' }}
      
        >
          <Inject services={[ Legend, Tooltip, ColumnSeries, Category, DataLabel]} />
          <SeriesCollectionDirective>
            {
              barCustomSeries.map((item, index)=> 
                <SeriesDirective key={index} {...item}/>
              )
            }
          </SeriesCollectionDirective>
        </ChartComponent>
      </div>
    </div>
  )
}
