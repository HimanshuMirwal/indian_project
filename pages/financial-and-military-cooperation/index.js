import Image from "next/image";
import pageData from "../../constants";
import Link from "next/link";
export default function Home() {
    const name = "financial-and-military-cooperation";

  return (
      <>
          <div className="wrapper">
              <div className="imageBg">
                  <Image
                      src={pageData[name].bgImage}
                      alt={pageData[name].bgImageAlt}
                      style={{
                          objectFit: "contain"
                      }}
                      fill={true}
                  />
              </div>
              <div className="contentHolder">
                  {
                      pageData[name].cards.map((data, index) => {
                          return <Link href={data.pdfUrl} download={true} target="_blank" key={index}>
                           <div className={"cardImage"}
                              style={{
                                  height: data.height,
                                  width: data.width
                              }}
                          >
                              <Image
                                  src={data.image}
                                  alt={data.alt}
                                  style={{
                                      objectFit: "fill"
                                  }}
                                  fill={true}
                              />
                          </div>
                          </Link>
                      })
                  }
              </div>
          </div>
      </>

  );
}
