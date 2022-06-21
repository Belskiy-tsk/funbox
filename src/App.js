import './App.css';
import FBCard from "../components";

export function App() {
    return (
        <div className="App">
            <header className='header'>Ты сегодня покормил кота?</header>
            <div className='cardsWrapper'>
                <FBCard
                    composition='с фуа-гра'
                    servingNumber='10'
                    weight='0,5'
                    href='/'
                    selectedDescripton='Печень утки разварная с артишоками.'
                />
                <FBCard
                    composition='с рыбой'
                    servingNumber='40'
                    giftNumber='2'
                    weight='2'
                    href='/'
                    selectedDescripton='Головы щучьи с чесноком да свежайшая сёмгушка.'
                />
                <FBCard
                    composition='с курой'
                    servingNumber='100'
                    giftNumber='5'
                    happy
                    weight='5'
                    href='/'
                    selectedDescripton='Филе из цыплят с трюфелями в бульоне.'
                    disabled
                />
            </div>
        </div>
    );
}

