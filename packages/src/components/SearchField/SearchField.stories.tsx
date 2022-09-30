import 'antd/dist/antd.css'

import type { ComponentMeta, ComponentStory } from '@storybook/react'

import { SearchField as SearchFieldComponent } from './SearchField'

const meta: ComponentMeta<typeof SearchFieldComponent> = {
    title: 'SearchField',
    argTypes: { onChange: { action: 'changed' }, onChangeSearchText: { action: 'changedSearchText' } },
}

export default meta

const Template: ComponentStory<typeof SearchFieldComponent> = (args) => <SearchFieldComponent {...args} />

export const SearchField = Template.bind({})

SearchField.args = {
    prefix: 'This is prefix',
    label: 'Label',
    searchText: 'Search',
    notFound: 'Not found',
    error: 'Error',
}
