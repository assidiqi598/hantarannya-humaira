import Button from "@/components/button";
import Link from "next/link";
import styles from "./app.module.css";
import Image from "next/image";
import alt from "@/data/alt";

export default function Home() {
  return (
    <div className="relative flex flex-col items-center justify-center h-svh w-svw portrait:bg-main-bg-vertical bg-no-repeat bg-cover landscape:bg-main-bg-horizontal">
      <Image
        src="/assets/hantaran-hidden.webp"
        alt={`${alt}-hidden`}
        width={410}
        height={450}
        priority={true}
        className="w-2/3 md:w-5/12 lg:w-1/5 mt-[5rem] opacity-0 animate-fadeup"
      />

      <div className="flex flex-col items-center justify-end p-3 w-full lg:w-1/2 lg:px-0 opacity-0 animate-fadeup animation-delay-600">
        <h1
          className={`${styles["main-intro-title"]} text-4xl lg:text-5xl text-center`}
        >
          &ldquo;Hantaran&rdquo; specially made for you
        </h1>
        <p className="text-pink-600 my-5">
          by HANTARANNYA HUMAIRA
        </p>
        <div className="flex flex-col items-center justify-center">
          <Link href="/book">
            <Button
              id="main-intro-go-to-choosing-btn"
              bgColor="bg-pink-600"
              width="w-[9.13rem]"
            >
              Book now{" "}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 10 22"
                fill="currentColor"
                className="size-6 chevron-right"
              >
                <path
                  fillRule="evenodd"
                  d="M16.28 11.47a.75.75 0 0 1 0 1.06l-7.5 7.5a.75.75 0 0 1-1.06-1.06L14.69 12 7.72 5.03a.75.75 0 0 1 1.06-1.06l7.5 7.5Z"
                  clipRule="evenodd"
                />
              </svg>
            </Button>
          </Link>
          <Link href="/gallery">
            <Button
              id="main-intro-go-to-gallery-btn"
              bgColor="bg-pink-200"
              textColor="text-black-400"
              width="w-[9.13rem]"
              additionalClassNames={[
                "mt-2",
                "border-pink-600",
                "border",
              ]}
            >
              See gallery{" "}
              <svg
                version="1.1"
                id="Layer_1"
                xmlns="http://www.w3.org/2000/svg"
                xmlnsXlink="http://www.w3.org/1999/xlink"
                x="0px"
                y="0px"
                width="24"
                height="24"
                className="ml-2"
                viewBox="0 0 122.88 122.151"
                enableBackground="new 0 0 122.88 122.151"
                xmlSpace="preserve"
              >
                <g>
                  <path d="M8.676,0h105.529c2.405,0,4.557,0.984,6.124,2.552c1.567,1.567,2.551,3.754,2.551,6.124v104.8 c0,2.405-0.983,4.557-2.551,6.124c-1.568,1.567-3.755,2.552-6.124,2.552H8.676c-2.406,0-4.557-0.984-6.124-2.553 C0.984,118.032,0,115.845,0,113.476V8.675C0,6.27,0.984,4.119,2.552,2.552C4.12,0.984,6.307,0,8.676,0L8.676,0z M9.097,88.323 l35.411-33.9c1.421-1.313,3.645-1.167,4.921,0.255c0.037,0.036,0.037,0.073,0.073,0.073l31.459,37.218l4.812-29.6 c0.328-1.896,2.114-3.208,4.01-2.879c0.729,0.109,1.385,0.474,1.895,0.948l22.07,23.184V10.773c0-0.474-0.183-0.875-0.511-1.166 c-0.291-0.292-0.729-0.511-1.166-0.511H10.737c-0.474,0-0.875,0.182-1.166,0.511c-0.292,0.291-0.511,0.729-0.511,1.166v77.55H9.097 L9.097,88.323z M90.526,19.866c3.464,0,6.635,1.422,8.895,3.682c2.297,2.296,3.682,5.431,3.682,8.895 c0,3.463-1.421,6.634-3.682,8.894c-2.296,2.297-5.431,3.682-8.895,3.682c-3.462,0-6.634-1.421-8.894-3.682 c-2.297-2.296-3.682-5.431-3.682-8.894c0-3.463,1.421-6.634,3.682-8.895C83.929,21.251,87.064,19.866,90.526,19.866L90.526,19.866z" />
                </g>
              </svg>
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
}
