import {styled} from 'styled-components'
import { COLORS } from '../../constants/colors'

export const Loading = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    & > *{
        color: ${COLORS.vinho} !important;
        background-color: ${COLORS.vinho};
        border: 5px solid ${COLORS.bege};
        box-shadow: 7px 7px 13px 0px rgba(50, 50, 50, 0.22);
    }
`