import React from 'react';
import { AccumulationChartComponent, AccumulationSeriesCollectionDirective, AccumulationSeriesDirective, PieSeries, Inject, AccumulationDataLabel, AccumulationTooltip, AccumulationLegend } from '@syncfusion/ej2-react-charts';
import { useStateContext } from '../../contexts/ContextProvider';


export default function Pie({ id, data, legendVisibility, height }) {
  const { currentMode } = useStateContext();
  return (
    <AccumulationChartComponent
      id={id}
      legendSettings={{ visible: legendVisibility, background: 'white' }}
      height={height}
      tooltip={{ enable: true }}
      background={currentMode === 'Dark' ? '#33373E' : '#fff'}
    >
      <Inject services={[ AccumulationDataLabel, PieSeries, AccumulationDataLabel, AccumulationTooltip, AccumulationLegend]}/>
      <AccumulationSeriesCollectionDirective>
        <AccumulationSeriesDirective
          dataSource={data}
          name="Sale"
          xName='x'
          yName='y'
          innerRadius='40%'
          startAngle={0}
          endAngle={360}
          radius="70%"
          explode
          explodeOffset='10%'
          explodeIndex={2}
          dataLabel={{
            visible: 'true',
            position: 'Inside',
            font: {
              fontWeight: '600',
              color: '#fff'
            }
          }}
        />
      </AccumulationSeriesCollectionDirective>
    </AccumulationChartComponent>
  )
}
