import 'antd/dist/antd.css'

import type { ComponentMeta, ComponentStory } from '@storybook/react'

import { Loading as LoadingComponent } from './Loading'

const meta: ComponentMeta<typeof LoadingComponent> = {
    title: 'Loading',
    parameters: { actions: { argTypesRegex: '^on.*' } },
}

export default meta

const Template: ComponentStory<typeof LoadingComponent> = (args) => <LoadingComponent {...args} />

export const Loading = Template.bind({})
