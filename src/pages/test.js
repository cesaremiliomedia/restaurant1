import React from "react"

export default function test2() {
  const imgSrcs = [
    {
      img:
        "https://houseofthenonchalant.com/wp-content/uploads/2019/09/3Z1A8466.jpg",
      info: "dafsfdsafdafsda",
    },
    {
      img:
        "https://houseofthenonchalant.com/wp-content/uploads/2019/09/3Z1A8466.jpg",
      info: "dafsfdsafdafsda",
    },
    {
      img:
        "https://houseofthenonchalant.com/wp-content/uploads/2019/09/3Z1A8466.jpg",
      info: "dafsfdsafdafsda",
    },
    {
      img:
        "https://houseofthenonchalant.com/wp-content/uploads/2019/09/3Z1A8466.jpg",
      info: "dafsfdsafdafsda",
    },
    {
      img:
        "https://houseofthenonchalant.com/wp-content/uploads/2019/09/3Z1A8466.jpg",
      info: "dafsfdsafdafsda",
    },
    {
      img:
        "https://houseofthenonchalant.com/wp-content/uploads/2019/09/3Z1A8466.jpg",
      info: "dafsfdsafdafsda",
    },
  ]
  return (
    <div className="mx-3 mt-0" style={{ color: "black" }}>
      <div className="hs d-flex" style={{ color: "black" }}>
        {imgSrcs.map(img => (
          <div style={{ minWidth: "8rem" }} className="card bg-secondary">
            <img
              style={{ objectFit: "contain", width: "100px", height: "auto" }}
              src={img.img}
              class="pt-1 rounded-circle "
              alt="dsaffd"
            ></img>

            <div style={{ minWidth: "8rem" }} class="p-2 card-body">
              <h5
                style={{
                  letterSpacing: "2px",
                  lineHeight: "10px",
                  color: "black",
                }}
                class="mt-2"
              >
                List-based media object
              </h5>
              <p style={{ fontSize: "12px" }}>{img.info}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
