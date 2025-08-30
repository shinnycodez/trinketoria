import React from 'react';
import { Link } from 'react-router-dom';

const categories = [
    {
    id: 3,
    title: " Floral Bracelets ˚⊹♡",
    imageUrl: "https://pbs.twimg.com/media/GznKYQ5XsAAVQaR?format=jpg&name=900x900",
    link: "Floral bracelets"
  },
  {
    id: 1,
    title: "Rings ⋆｡𖦹°",
    imageUrl: "https://pbs.twimg.com/media/GznKYQnWIAAiRe2?format=jpg&name=900x900",
      link: "rings",
  },


  //   {
  //   id: 4,
  //   title: "Bookmarks",
  //   imageUrl: "https://scontent.flhe7-2.fna.fbcdn.net/v/t1.15752-9/520429125_1334742338219253_2531984894124566733_n.jpg?stp=dst-jpg_s480x480_tt6&_nc_cat=103&ccb=1-7&_nc_sid=0024fc&_nc_ohc=j7XYMWWmVY8Q7kNvwFYLOQX&_nc_oc=Adkef7qEPDIiflArvyMlAj0FTg2JoPnp6bRd6DV5GSZcJB7m97b8m8ZRWL8id8lVe1k&_nc_ad=z-m&_nc_cid=0&_nc_zt=23&_nc_ht=scontent.flhe7-2.fna&oh=03_Q7cD2wF-rY8Fqy79pbeR3ML53F8zqAW-4GruhgPAjdrVNB5Twg&oe=68AC16BF"
  // },
      {
    id: 2,
    title: "Earings ˚⋆𐙚｡",
    imageUrl: "https://pbs.twimg.com/media/GznKYMpWoAAJGb2?format=png&name=900x900",
      link: "Earings"
  },
      {
    id: 5,
    title: "Necklace ｡°✩",
    imageUrl:"https://pbs.twimg.com/media/GznKYMoWgAEXcLY?format=png&name=900x900",
     link: "Necklaces"
  },
        {
    id: 5,
    title: "Stretchable bracelets ⋆⭒˚.⋆",
    imageUrl:"https://pbs.twimg.com/media/GznLG4EWoAA5oB3?format=png&name=900x900",
     link: "Stretchable bracelets"
  },
        {
    id: 6,
    title: "Phone charm ⋆⭒˚.⋆",
    imageUrl: "https://pbs.twimg.com/media/GznLNk2W8AA1csh?format=png&name=900x900",
        link: "Phone charm"
  },
          {
    id: 7,
    title: "Bag charm ⋆⭒˚.⋆",
    imageUrl: "https://pbs.twimg.com/media/GznLawHWMAA-g1L?format=png&name=900x900",
        link: "Bag charm"
  },
            {
    id: 8,
    title: "y2k bracelets ⋆⭒˚.⋆",
    imageUrl: "https://pbs.twimg.com/media/GznLhLpXwAAL6iv?format=jpg&name=900x900",
        link: "y2k bracelets"
  },

];

function FeaturedCategories() {
  return (
<div>
  <h2 className="text-[#141414] text-[22px] font-bold leading-tight tracking-[-0.015em] px-4 pb-3 pt-5">
    Featured Categories
  </h2>

  <div className="grid grid-cols-2 gap-4 p-4 md:grid-cols-3">
    {categories.map(category => (
      <Link
        to={`/products?category=${encodeURIComponent(category.link)}`}
        key={category.id}
        className="flex flex-col gap-2 group bg-white rounded-lg overflow-hidden shadow-sm transition-transform duration-300 group-hover:scale-[1.03]"
      >
        <div
          className="w-full aspect-[1/1] bg-center bg-no-repeat bg-cover"
          style={{ backgroundImage: `url(${category.imageUrl})` }}
        ></div>
        <p className="text-[#141414] text-base font-medium leading-normal text-center px-2 pb-3">
          {category.title}
        </p>
      </Link>
    ))}
  </div>
</div>

  );
}

export default FeaturedCategories;
