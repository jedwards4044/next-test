import React, { Fragment } from 'react'
import Images from './Images'
import Text from './Text'
import Label from './Label'
import List from './List'
import Header from '../components/Header'
import Navbar from '../components/Navbar'
import Navigation from '../components/Navigation'
import Grid from '../components/Grid'
import Footer from './Footer'
import Carousel from './Carousel'
import Video from './Video'

const keysToComponentMap = {
    text: Text,
    images: Images,
    label: Label,
    list: List,
    images: Images,
    grid: Grid,
    header: Header,
    navigation: Navigation,
    footer: Footer,
    carousel: Carousel,
    video: Video,
}

const mapPropsToConfig = (config) => {
    const configWithProps = []

    config.forEach((item) => {
        if (item.component) {
            const { component, ...props } = item

            configWithProps.push({
                ...props,
                Component: component,
            })
        }
    })

    return configWithProps
}

export const Renderer = ({ config }) => {
    if (!config) {
        throw new Error('You are calling Renderer with no config.')
    }

    const configWithProps = mapPropsToConfig(config)

    const renderComponents = (items, index) => {
        return items.map((item) => {
            const { Component, ...props } = item
            //Changes json string to comonent value
            const Comp = keysToComponentMap[Component]

            return (
                <Fragment key={index}>
                    <Comp {...props} />
                </Fragment>
            )
        })
    }

    return renderComponents(configWithProps)
}
