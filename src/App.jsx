import Header from './Components/Header/Header';
import Hero from './Components/Hero/Hero';
import Main from './Components/Main/Main';
import Tabs from './Components/Tabs/Tabs';
import './App.css';

function App() {
  // Hero komponentiga beriladigan karta ma'lumotlari
  const cards = [
    {
      title: 'Rasm 1',
      description: 'Bu birinchi karta.',
      imageUrl: 'https://picsum.photos/id/2/200/300',
    },
    {
      title: 'Rasm 2',
      description: 'Bu ikkinchi karta.',
      imageUrl: 'https://picsum.photos/id/10/200/300',
    },
    {
      title: 'Rasm 3',
      description: 'Bu uchinchi karta.',
      imageUrl: 'https://picsum.photos/id/7/200/300',
    },
    {
      title: 'Rasm 4',
      description: 'Bu to\'rtinchi karta.',
      imageUrl: 'https://picsum.photos/id/20/200/300',
    },
    {
      title: 'Rasm 5',
      description: 'Bu beshinchi karta.',
      imageUrl: 'https://picsum.photos/id/26/200/300',
    },
    {
      title: 'Rasm 6',
      description: 'Bu oltinchi karta.',
      imageUrl: 'https://picsum.photos/id/15/200/300',
    },
  ];

  return (
    <div>
      <Header />
      <Hero cards={cards}/>
      <Main />
      <Tabs />
    </div>
  );
}

export default App;