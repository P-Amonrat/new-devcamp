import './App.css';
import PictureCardComponents from './Components/PictureCard';

function App() {
  let data = [
    {
      id: 1,
      imgSrc: "https://picsum.photos/id/200/300",
      createBy: "JACKSON",
      likeCount: 0,
      commentCount: 0
    },
    {
      id: 2,
      imgSrc: "https://picsum.photos/id/200/300",
      createBy: "SOMPORN",
      likeCount: 0,
      commentCount: 0
    },
    {
      id: 3,
      imgSrc: "https://picsum.photos/id/200/300",
      createBy: "SOMCHAI",
      likeCount: 0,
      commentCount: 0
    },
    {
      id: 4,
      imgSrc: "https://picsum.photos/id/200/300",
      createBy: "PETER",
      likeCount: 0,
      commentCount: 0
    }
  ]

  let list = data.map((x) => {
    return (
      <div>
        <PictureCardComponents
          key={x.id}
          id={x.id}
          imgSrc={x.imgSrc}
          createBy={x.createBy}
          likeCount={x.likeCount}
          commentCount={x.commentCount}
        />
      </div>
    )
  })

  return (
    <div>
      <div className="flex-container" >{list}</div>
    </div>
  );
}

export default App;
