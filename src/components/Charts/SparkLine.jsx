import React from 'react'
import { SparklineComponent, Inject, SparklineTooltip } from '@syncfusion/ej2-react-charts';



export default function SparkLine({ id, height, width, color, data, type, currentColor  }) {
  return (
    <div>
      <SparklineComponent
        id={id}
        height={height}
        width={width}
        fill={color}
        valueType="Numeric"
        border={{ color: currentColor, width: 2 }}
        dataSource={data}
        xName="x"
        yName="yval"
        tooltipSettings={{
          visible: true,
          //eslint-disable-next-line no-template-curly-in-string
          format: '${x} : data ${yval}',
          trackLineSettings: {
            visible: true,
          },
        }}
        markerSettings={{ visible: ['All'], size: 2.5, fill: currentColor }}
        type={type}
      >
        <Inject services={[SparklineTooltip]} />
      </SparklineComponent> 
    </div>
  )
}




