import _ from 'lodash-es'
import { i18n } from '../../i18n'


export const generateMonth = (data: number): string => {
    switch (data) {
        case 1:
            return _.capitalize(i18n.shortMonths_january)
        case 2:
            return _.capitalize(i18n.shortMonths_february)
        case 3:
            return _.capitalize(i18n.shortMonths_march)
        case 4:
            return _.capitalize(i18n.shortMonths_april)
        case 5:
            return _.capitalize(i18n.shortMonths_may)
        case 6:
            return _.capitalize(i18n.shortMonths_june)
        case 7:
            return _.capitalize(i18n.shortMonths_july)
        case 8:
            return _.capitalize(i18n.shortMonths_august)
        case 9:
            return _.capitalize(i18n.shortMonths_september)
        case 10:
            return _.capitalize(i18n.shortMonths_octomber)
        case 11:
            return _.capitalize(i18n.shortMonths_november)
        case 12:
            return _.capitalize(i18n.shortMonths_december)

        default:
            return ''
    }
}
