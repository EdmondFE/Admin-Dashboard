import React from 'react'
import { ChartComponent, SeriesCollectionDirective, SeriesDirective, Inject, Legend, Category, StackingColumnSeries, Tooltip } from '@syncfusion/ej2-react-charts';

import { stackedCustomSeries, stackedPrimaryXAxis, stackedPrimaryYAxis } from '../../data/dummy';
import { useStateContext } from '../../contexts/ContextProvider';
export default function Stacked({ width, height }) {
  const { currentMode } = useStateContext();
  return (
   
      <ChartComponent
        id="chart"
        width={width}
        height={height}
        tooltip={{ enable: true }}
        chartArea={{ border: { width: 0 }}}
        primaryXAxis={stackedPrimaryXAxis}
        primaryYAxis={stackedPrimaryYAxis}
        legendSettings={{ background: 'white' }}
        background={currentMode === 'Dark' ? '#33373E' : '#fff'}
      >
        <Inject services={[ StackingColumnSeries, Category, Legend, Tooltip]}/>
        <SeriesCollectionDirective>
          {
            stackedCustomSeries.map((item, index)=> <SeriesDirective key={index} {...item}/>)
          }
        </SeriesCollectionDirective>
      </ChartComponent>
  
  )
}
