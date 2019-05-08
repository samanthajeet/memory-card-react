import React, { Component } from "react";
import styled from "styled-components";

const Home = styled.div`
  font-family: "Ubuntu", sans-serif;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Board = styled.div`

  width: 40rem;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
`;

const Card = styled.div`
  /* border: 2px solid black; */
  .flipped {
    width: 100%;
    height: 100%;
    img {
    object-fit: cover;
    width: 100%;
    height: 100%;
  }
    
  }

  .not-flipped {
    display: none;
  }
  width: 8rem;
  height: 8rem;
  margin: 0.5rem;
  border: 1px solid black;


`;

function initialCards(){
  return [
      {
        value: "a",
        flipped: false,
        matched: false,
        img: "https://i.etsystatic.com/5805234/r/il/1a38f2/825515703/il_794xN.825515703_19nf.jpg",

      },
      {
        value: "b",
        flipped: false,
        matched: false,
        img: "https://imgix.bustle.com/rehost/2016/10/11/8fbffaf3-4576-47ce-bc6e-a06fc5abf5cd.jpg?w=970&h=546&fit=crop&crop=faces&auto=format&q=70"
      },
      {
        value: "c",
        matched: false,
        flipped: false,
        img: "https://vignette.wikia.nocookie.net/parksandrecreation/images/1/11/The_Mayor.jpg/revision/latest/top-crop/width/240/height/240?cb=20111125202243"
      },
      {
        value: "d",
        flipped: false,
        matched: false,
        img: "https://pbs.twimg.com/profile_images/997086700353421312/NPIFkhS6_400x400.jpg"
      },
      {
        value: "e",
        flipped: false,
        matched: false,
        img: "https://compote.slate.com/images/dcaa5119-5480-401c-ac0b-53f4ee10b7b3.jpg"
      },
      {
        value: "f",
        flipped: false,
        matched: false,
        img: "https://a1cf74336522e87f135f-2f21ace9a6cf0052456644b80fa06d4f.ssl.cf2.rackcdn.com/images/characters/p-Bobs-Burgers-John-Roberts.jpg"
      },
      {
        value: "g",
        flipped: false,
        matched: false,
        img: "http://cdn.collider.com/wp-content/uploads/sigourney-weaver-alien-1.jpg"
      },
      {
        value: "h",
        flipped: false,
        matched: false,
        img: "https://i.pinimg.com/originals/8a/f1/1b/8af11b1a04a315e3359ad53cfb4347ef.jpg"
      },
      {
        value: "a",
        flipped: false,
        matched: false,
        img: "https://i.etsystatic.com/5805234/r/il/1a38f2/825515703/il_794xN.825515703_19nf.jpg",

      },
      {
        value: "b",
        flipped: false,
        matched: false,
        img: "https://imgix.bustle.com/rehost/2016/10/11/8fbffaf3-4576-47ce-bc6e-a06fc5abf5cd.jpg?w=970&h=546&fit=crop&crop=faces&auto=format&q=70"
      },
      {
        value: "c",
        matched: false,
        flipped: false,
        img: "https://vignette.wikia.nocookie.net/parksandrecreation/images/1/11/The_Mayor.jpg/revision/latest/top-crop/width/240/height/240?cb=20111125202243"
      },
      {
        value: "d",
        flipped: false,
        matched: false,
        img: "https://pbs.twimg.com/profile_images/997086700353421312/NPIFkhS6_400x400.jpg"
      },
      {
        value: "e",
        flipped: false,
        matched: false,
        img: "https://compote.slate.com/images/dcaa5119-5480-401c-ac0b-53f4ee10b7b3.jpg"
      },
      {
        value: "f",
        flipped: false,
        matched: false,
        img: "https://a1cf74336522e87f135f-2f21ace9a6cf0052456644b80fa06d4f.ssl.cf2.rackcdn.com/images/characters/p-Bobs-Burgers-John-Roberts.jpg"
      },
      {
        value: "g",
        flipped: false,
        matched: false,
        img: "http://cdn.collider.com/wp-content/uploads/sigourney-weaver-alien-1.jpg"
      },
      {
        value: "h",
        flipped: false,
        matched: false,
        img: "https://i.pinimg.com/originals/8a/f1/1b/8af11b1a04a315e3359ad53cfb4347ef.jpg"
      }
    ]
  
}

class App extends Component {
  state = {
    cards: initialCards() ,
    deck: [],
    card1Value: '',
    card1Index: null,
    card2Value:'',
    card2Index: null
  };


  startGame() {
    this.createDeck();
  }

  createDeck = async () => {

    let deck = [...this.state.cards];
    await this.shuffle(deck);
    this.setState({ deck });
    
  };

  shuffle(array) {
    var currentIndex = array.length,
      temporaryValue,
      randomIndex;

    // While there remain elements to shuffle...
    while (0 !== currentIndex) {
      // Pick a remaining element...
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex -= 1;

      // And swap it with the current element.
      temporaryValue = array[currentIndex];
      array[currentIndex] = array[randomIndex];
      array[randomIndex] = temporaryValue;
    }

    return array;
  }

  chooseCard = async (e,i) => {
    const { card1Value, deck} = this.state;
    if (!card1Value) {
      console.log(this.state.deck)
      deck[i].flipped = true
      this.setState({ card1Value: e, card1Index: i });
    } else {
      deck[i].flipped = true
      await this.setState({ card2Value: e, card2Index: i });
      this.compareCards() 
      
    }
  };

  compareCards =() => {
    const {deck, card1Index, card2Index, card1Value, card2Value} = this.state
      if(card1Value === card2Value) {
        deck[card1Index].matched = true
        deck[card2Index].matched = true
        this.setState({ card1Value: "", card2Value: "" , card1Index: null, card2Index: null});
        
      } else {
        setTimeout(function(){ 
          deck[card1Index].flipped = false;
          deck[card2Index].flipped = false;
          this.setState({ card1Value: "", card2Value: "" , card1Index: null, card2Index: null});
        }.bind(this), 1000);
      }        
  
  }

  resetGame= async() =>{
    await this.setState({
      cards: initialCards(),
      deck: [],
      card1Index: null,
      card1Value: '',
      card2Index: null,
      card2Value: ''
    })
    this.startGame()
  }

  render() {

    const mappedDeck = this.state.deck.map((card, index) => {
      // console.log(card.flipped)
      return (
        <Card
          key={index}
          value={card.value}
          onClick={() => this.chooseCard(card.value, index)}
          
        >
        <div className={card.flipped ? 'flipped' : 'not-flipped'}>

          <img src={card.img} alt=""/>
        </div>
        </Card>
      );
    });
    return (
      <Home>
        <h1>Sam's Really Rad Memory Card Game</h1>
        <button onClick={() => this.startGame()}>start game</button>
        <button onClick={() => this.resetGame()}>reset</button>
        <Board>{mappedDeck}</Board>
      </Home>
    );
  }
}

export default App;
