import moment from "moment";

 // Nov 24, 2020
export const SampleMoment = (dateTime) => {
    return dateTime ? moment.format('ll') : '--'
}
