import './FBCardStyle.css';
import {useState} from "react";

const gifts = (number) => {
    const giftNumber = Number(number)
    if (giftNumber > 1) {
        const number = Math.floor(giftNumber / 10);
        const remainder = Math.floor(giftNumber - number * 10);
        if (giftNumber >= 10 && giftNumber <= 20) {
            return ' мышей в подарок'
        } else if (remainder === 1) {
            return ' мышь в подарок'
        } else if (remainder === 2 || remainder === 3 || remainder === 4) {
            return ' мыши в подарок'
        } else {
            return ' мышей в подарок'
        }
    } else {
        return 'мышь в подарок'
    }
}

function FBCard(props) {
    const [selected, setSelected] = useState(false)
    const [approval, setApproval] = useState(false)
    const [mouseEnter, setMouseEnter] = useState(false)
    const handleClick = event => {
        event.currentTarget.classList.toggle('selected');
        event.currentTarget.classList.remove('mouseout');
        setSelected(!selected)
        !selected && setApproval(false)
    };

    const handleLinkClick = event => {
        const cardItem = event.currentTarget.parentElement.parentElement.querySelector('.cardItem')
        cardItem.classList.toggle('selected');
        cardItem.classList.remove('mouseout');
        setApproval(true)
        setSelected(!selected)
    };

    const handleMouseOut = event => {
        event.currentTarget.classList.add('mouseout');
        selected && setApproval(true)
        setMouseEnter(false)
    };

    const handleMouseEnter = () => {
        setMouseEnter(true)
    };

    return (
        <div className='cardWrapper'>
            <div
                disabled={props.disabled}
                className="cardItem"
                onClick={handleClick}
                onMouseLeave={handleMouseOut}
                onMouseEnter={handleMouseEnter}>
                {
                    selected && approval && mouseEnter
                        ?
                        <h4 className='approval'>Котэ не одобряет?</h4>
                        :
                        <h4 className="title">Сказочное заморское яство</h4>
                }
                <h2 className='brand'>Нямушка</h2>
                <h3 className='composition'>{props.composition}</h3>
                <div className='description'>
                    <div className='serving'>
                        <span className='number'>{props.servingNumber}</span>
                        <span className='words'>{' '} порций</span>
                    </div>
                    <div className='gift'>
                        {
                            props.giftNumber > 1
                            &&
                            <span className='number'>{props.giftNumber}</span>
                        }
                        <span className='words'>{gifts(props.giftNumber)}</span>
                    </div>
                    {
                        props.happy
                        &&
                        <span className='words'>заказчик доволен</span>
                    }
                </div>
                <div className='weightWrapper'>
                    <div className='weightContent'>
                        <span className='weightTitle'>{props.weight}</span>
                        <span className='weightSubTitle'>кг</span>
                    </div>
                </div>
            </div>
            <div className='cardSubtitle'>
                {
                    !props.disabled
                        ?
                        !selected
                            ?
                            <>
                                <span className='cardSubtitleText'>Чего сидишь? Порадуй котэ,</span><span
                                className='buyText' onClick={handleLinkClick}>купи.</span>
                            </>
                            :
                            <span className='cardSubtitleText'>{props.selectedDescripton}</span>
                        :
                        <span className='cardSubtitleText cardSubtitleTextEnded'>Печалька, {props.composition} закончился</span>
                }
            </div>
        </div>
    );
}

export default FBCard;
