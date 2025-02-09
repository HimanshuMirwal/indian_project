import Image from "next/image";
import pageData from "../../constants";
import Link from "next/link";
export default function Home() {


  return (
      <>
          <div className="wrapper">
              <div className="imageBg">
                  <Image
                      src={pageData["cultural-and-social-interations"].bgImage}
                      alt={pageData["cultural-and-social-interations"].bgImageAlt}
                      style={{
                          objectFit: "contain"
                      }}
                      fill={true}
                  />
              </div>
              <div className="contentHolder">
                  {
                      pageData["cultural-and-social-interations"].cards.map((data, index) => {
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
