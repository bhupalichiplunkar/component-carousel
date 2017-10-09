import styled from 'styled-components';

const styles = {};

styles.Carousel = styled.div`
    text-align: center;
    display: flex;
    flex-flow: row nowrap;
`;

styles.CarouseButton = styled.div`
    flex: 0 0 auto;
    margin : 0 auto;
    cursor: pointer;
    line-height : ${props => props.height};
`;

styles.ButtonText = styled.div`
    display : ${props => props.hide ? 'none': 'block'};
`;

styles.OuterContainer = styled.div`
    overflow: hidden;
    position: relative;
    height : ${props => props.height};
    width : ${props => props.width};
`;

styles.Wrapper= styled.div`
    display: flex;
    flex-flow: row nowrap;
    height: inherit;
    position: absolute;
    left : 0;
    transition : left ease-in-out .8s;
    left : ${props => props.left}
`;

export default styles;