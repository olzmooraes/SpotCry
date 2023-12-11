import {styled} from 'styled-components'
import { COLORS } from '../../constants/colors'

export const Loading = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    & > *{
        color: ${COLORS.darkGray} !important;
        background-color: ${COLORS.iceblue};
        border: 5px solid ${COLORS.darkGray};
        box-shadow: 7px 7px 13px 0px rgba(50, 50, 50, 0.22);
    }
`