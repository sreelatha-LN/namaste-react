import {CDN_URL} from '../utils/constants'
 
const RestaurantCard = (props) => {
    const { resData } = props;
    const resDatas=resData?.info
    // const getValues=resDatas.map(ele=> console.log(ele))
    console.log(resDatas,"resDatas")
    const cuisinesData=resDatas.cuisines
    const image= resDatas.cloudinaryImageId
    const name=resDatas.name
    const averaggeRating=resDatas.avgRating
    const costOfTwo= resDatas.costForTwo
  
   
    console.log(resData,"resData")
   
    return (
      <div className="res-card m-4 p-4 w-[250px] rounded-lg">
        <img
          className="rounded-lg"
          alt="image-logo"
          src={CDN_URL+ image }
        />
        <h3 className='font-bold py-4 text-lg'>{name}</h3>
        <h4>{cuisinesData.join(" ")}</h4>
        <h4>{averaggeRating}</h4>
        <h4>{costOfTwo}</h4>
      </div>
    );
  //   not using keys is not accepatable>>>> using index as key is not good try using the id from the array
  };




  // HOC

  // restarnt card will be input it will get the respromted cad which is enhanced
  export const withPromotedLabel=(RestaurantCard)=>{
    return (props)=>{
      return(
        <div>
          <label className='absolute bg-black text-stone-50 m-2 p-2 rounded-lg'>Promoted</label>
          <RestaurantCard {...props}/>
        </div>
      )
    }

  }

  export default RestaurantCard