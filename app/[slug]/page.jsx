import BBC from "../../bbcObject.json";

export default async function Page({ params }) {
  const { slug } = await params; //  Await params before using
  const key = slug.toLowerCase();

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
    <div>
      <p>Key: {key}</p>
      <h1>
        {speaker.fName} {speaker.lName}
      </h1>
      <p>{speaker.bio}</p>
      <img src={speaker.photo} alt={`${speaker.fName} ${speaker.lName}`} />
    </div>
  );
}
