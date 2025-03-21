import BBC from "../../../bbcObject.json";
import styles from "./page.module.css";
import Image from "next/image";
import Link from "next/link";

////  ********* SPEAKER PROFILE PAGE

export default async function Page({ params, searchParams }) {
  
  const { slug } = await params; //  Await params before using
  const key = slug.toLowerCase();

  const previousPage =
    searchParams?.from == "agenda"
      ? "/"
      : searchParams?.from == "speakers"
      ? "speakers"
      : "/";

  // const newSpeakerGroup = Object.values(BBC.event).flatMap(
  //   (value) => value.speakers
  // );
  // console.log(newSpeakerGroup);
  // const findSpeaker = newSpeakerGroup.find(
  //   (person) => person.lName.toLowerCase() === key
  // );
  // console.log(findSpeaker);

  const speaker = Object.values(BBC.event)
    .flatMap((value) => value.speakers) // Flatten all speakers into one array
    .find((person) => person.lName.toLowerCase() === key);

  if (!speaker) {
    return <p>No speaker found for "{key}"</p>;
  }

  return (
    <div className={styles.profileContain}>
      <Link href={`../${previousPage}`}>
        <div className={styles.btn}>Back</div>
      </Link>
      <div className={styles.speakerGrid}>
        <Image
        
          className={styles.profilePic}
          height={300}
          width={300}
          src={speaker.photo}
          alt={`${speaker.fName} ${speaker.lName}`}
        />

        <div className={styles.content}>
          <h1>
            {speaker.fName} {speaker.lName}
          </h1>

          <h4>{speaker.company}</h4>
          <p>
            <em>{speaker.title}</em>
          </p>
          <br />
          <p dangerouslySetInnerHTML={{ __html: speaker.bio }}></p>
        </div>
      </div>
    </div>
  );
}
