import React, { useEffect, useState } from 'react'
import classnames from 'classnames'

import _isDate from 'lodash/isDate'
import _isNill from 'lodash/isNil'

import { View, WeSingFC } from '@tencent/visual-material-wesing-ui'

import './process.less'

interface DataSource {
  title: string
  desc?: string
  icon?: string
}

export interface Data {
  dataSource: DataSource[]
  type: 'timeline' | 'wizard' | 'timeline-icon'
}

const CountDown: WeSingFC<Data> = props => {
  const { type, dataSource } = props.cmp.data

  const isOverload = dataSource.length > 3

  const rootClass = classnames('wesing-process', `wesing-process--${type}`, {
    'wesing-process--overload': isOverload,
  })

  return (
    <View className={rootClass}>
      <View className='wesing-process__inner'>
        {dataSource.map((item, key) => {
          return (
            <View className='process-item' key={key}>
              <View className='process-item-inner'>
                <View className='process-item__bar'></View>
                <View className='process-item__title'>{item.title}</View>
                <View className='process-item__desc'>{item.desc}</View>
              </View>
            </View>
          )
        })}
      </View>
    </View>
  )
}

export default CountDown
