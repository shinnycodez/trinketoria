import React from 'react';
import { Link } from 'react-router-dom';

const categories = [
    {
    id: 3,
    title: " Floral Bracelets ˚⊹♡",
    imageUrl: "https://scontent.flhe3-2.fna.fbcdn.net/v/t1.15752-9/524337579_1922991248240764_8981366940610896235_n.jpg?stp=dst-jpg_p2048x2048_tt6&_nc_cat=106&ccb=1-7&_nc_sid=0024fc&_nc_ohc=XtG9AnxezDIQ7kNvwEsLg2q&_nc_oc=Adn4opNRVL_rBbZavo2ZhZV30QJrzI3FCzs4MBKgwyDLVbomuwGTOCY8o3zyql6N7j4&_nc_ad=z-m&_nc_cid=0&_nc_zt=23&_nc_ht=scontent.flhe3-2.fna&oh=03_Q7cD2wFZcg8s7je0aR6uWPHFRd6ZwJEZ-00f9tHxHuCXcDnajg&oe=68B3F7F7",
    link: "Floral bracelets"
  },
  {
    id: 1,
    title: "Floral rings ⋆｡𖦹°",
    imageUrl: "https://scontent.flhe3-1.fna.fbcdn.net/v/t1.15752-9/525626254_1949798555780688_3894071762863773315_n.jpg?stp=dst-jpg_p2048x2048_tt6&_nc_cat=108&ccb=1-7&_nc_sid=0024fc&_nc_ohc=EN4hQH7IDLwQ7kNvwGg1kdD&_nc_oc=AdnW7dDX7YnERnWTHgz_6o-1AlOEPKizyL5lINtsKIl28iTU6SuJYFakBmXq37uVWJg&_nc_ad=z-m&_nc_cid=0&_nc_zt=23&_nc_ht=scontent.flhe3-1.fna&oh=03_Q7cD2wH_cmdINuO50skkbNiNdmiLPAvDH6bhR8ORfIzaypN7Ng&oe=68B3D2F4",
      link: "Floral rings",
  },


  //   {
  //   id: 4,
  //   title: "Bookmarks",
  //   imageUrl: "https://scontent.flhe7-2.fna.fbcdn.net/v/t1.15752-9/520429125_1334742338219253_2531984894124566733_n.jpg?stp=dst-jpg_s480x480_tt6&_nc_cat=103&ccb=1-7&_nc_sid=0024fc&_nc_ohc=j7XYMWWmVY8Q7kNvwFYLOQX&_nc_oc=Adkef7qEPDIiflArvyMlAj0FTg2JoPnp6bRd6DV5GSZcJB7m97b8m8ZRWL8id8lVe1k&_nc_ad=z-m&_nc_cid=0&_nc_zt=23&_nc_ht=scontent.flhe7-2.fna&oh=03_Q7cD2wF-rY8Fqy79pbeR3ML53F8zqAW-4GruhgPAjdrVNB5Twg&oe=68AC16BF"
  // },
      {
    id: 2,
    title: "Earings ˚⋆𐙚｡",
    imageUrl: "https://scontent.flhe7-1.fna.fbcdn.net/v/t1.15752-9/525776315_614315461361840_1125906738024931100_n.jpg?stp=dst-jpg_p480x480_tt6&_nc_cat=101&ccb=1-7&_nc_sid=0024fc&_nc_ohc=7Iod3yIz93EQ7kNvwEPWQq6&_nc_oc=Adl3Ovd19U3TPkhORBoGKKoT_u0lO6T9T_gGM3RQzuRkPQnXpQqlX2vcpJE9dufWAVU&_nc_ad=z-m&_nc_cid=0&_nc_zt=23&_nc_ht=scontent.flhe7-1.fna&oh=03_Q7cD2wHQocm1eJwrY-w6CPxrTgv9D-4nFvu2SSrN_eCx2-fdWQ&oe=68B3EA51",
      link: "Earings"
  },
      {
    id: 5,
    title: "Necklace ｡°✩",
    imageUrl:"https://scontent.flhe3-2.fna.fbcdn.net/v/t1.15752-9/524506306_653609547051178_7738732562085381202_n.jpg?stp=dst-jpg_p480x480_tt6&_nc_cat=106&ccb=1-7&_nc_sid=0024fc&_nc_ohc=_Uo3iaB7M08Q7kNvwEhQZSZ&_nc_oc=AdkfSds_Pn6Uza493L0z7clSogJvNElT4QCfB6-XlxtyM58HL7K-wFol5jFPch2fd3o&_nc_ad=z-m&_nc_cid=0&_nc_zt=23&_nc_ht=scontent.flhe3-2.fna&oh=03_Q7cD2wE-j2f2ng4yFtHsV7SzCJ0QVqEVOrv1gUmrfEZd6akp_w&oe=68B3D888",
     link: "Necklaces"
  },
        {
    id: 5,
    title: "Stretchable bracelets ⋆⭒˚.⋆",
    imageUrl:"https://scontent.flhe3-2.fna.fbcdn.net/v/t1.15752-9/527727519_3685565891745610_6053742655752609220_n.jpg?stp=dst-jpg_p480x480_tt6&_nc_cat=110&ccb=1-7&_nc_sid=0024fc&_nc_ohc=9XFvqLebX7YQ7kNvwHYGqem&_nc_oc=AdlBOUhBo_cvQ6YVUphhZkr3Hm-G8H7STMqePsMaVMit6F1xX9bsOwBw2XleiuzXEGg&_nc_ad=z-m&_nc_cid=0&_nc_zt=23&_nc_ht=scontent.flhe3-2.fna&oh=03_Q7cD2wGh7EMsABed4dXSikh43k4wYa3k9e3htWr6AZyrxzEMqA&oe=68B3EE81",
     link: "Stretchable bracelets"
  },
        {
    id: 6,
    title: "Phone charm ⋆⭒˚.⋆",
    imageUrl: "https://scontent.flhe3-2.fna.fbcdn.net/v/t1.15752-9/525516472_1400593887865122_5584671540579376642_n.jpg?stp=dst-jpg_p480x480_tt6&_nc_cat=110&ccb=1-7&_nc_sid=0024fc&_nc_ohc=U3fhQj2voDIQ7kNvwFAblgz&_nc_oc=AdmDdb_WafJve6YA1a9a_2z4nUVtm4YDpbQiIleOceLwhs1gmMvgCESvTFexbfbJgg8&_nc_ad=z-m&_nc_cid=0&_nc_zt=23&_nc_ht=scontent.flhe3-2.fna&oh=03_Q7cD2wE8C0aSjuNiERfjGKjHXyYhCyjRCINzihNctwjSbz-HCA&oe=68B3F140",
        link: "Phone charm"
  },
          {
    id: 7,
    title: "Bag charm ⋆⭒˚.⋆",
    imageUrl: "https://scontent.flhe3-2.fna.fbcdn.net/v/t1.15752-9/523944160_1537825047593416_8358288462340969374_n.jpg?stp=dst-jpg_p480x480_tt6&_nc_cat=106&ccb=1-7&_nc_sid=0024fc&_nc_ohc=C0hGC38-XoMQ7kNvwHqi_fJ&_nc_oc=AdnZlF38rfhRUmD2wzBVGyXH5ywcoQd1GuLXdkwphf2rA8x_gVLaOHWyvEcliLtC1Vo&_nc_ad=z-m&_nc_cid=0&_nc_zt=23&_nc_ht=scontent.flhe3-2.fna&oh=03_Q7cD2wFEeecSdftvToyryWCyaTRKg0cwdFj74_0no4W3MwsF2g&oe=68B3E2FB",
        link: "Bag charm"
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
