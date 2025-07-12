import styled from 'styled-components';
import ButtonComponent from '../../components/ButtonComponent/ButtonComponent';

export const WrapperTypeProduct = styled.div`
    align-items: center;
    display: flex;
    gap: 16px;
    justify-content: flex-start;
    height: 40px;
`
export const WrapperMoreButton = styled(ButtonComponent)`
    &:hover {
        color: #ffff;
        background-color: rgb(13,92, 182);
        span{
            color: #ffff;
        }
    }
`
export const WrapperProducts = styled.div`
    display: flex;
    gap: 14px;
    margin-top: 20px;
    flex-wrap: wrap;
`