// Gallery photos, newest event first.
//
// Images live in src/assets so Astro's pipeline resizes them and serves webp.
// Dropping a raw phone photo in public/ skips all of that.
//
// Every alt describes what is actually happening in the frame. A generic line
// is no use to someone using a screen reader and no use in search either.

import augustWall from "../assets/gallery/DSCF3746.jpg";
import augustCounter from "../assets/gallery/DSCF3755.jpg";
import augustServing from "../assets/gallery/DSCF3764.jpg";
import augustTalking from "../assets/gallery/DSCF3768.jpg";
import vietnameseGroup from "../assets/gallery/IMG_9483.JPG";
import vietnamesePair from "../assets/gallery/IMG_9488.JPG";
import caribbeanServing from "../assets/gallery/023636E4-7D7E-477F-9FF7-7B1AA2B47916.JPG";
import caribbeanPatties from "../assets/gallery/476ED4FD-031C-418A-98E8-6A31EB7533B3.JPG";
import caribbeanTrio from "../assets/gallery/48B0E77A-4E6D-4B6B-9322-6CA4438D41B3.JPG";
import caribbeanPlating from "../assets/gallery/8C457EDF-325B-4C1F-BFE4-23D0783ECB2C.JPG";
import caribbeanFullPlate from "../assets/gallery/C3D8722C-A122-4A1B-87AC-D46C5B11B5DD.JPG";
import caribbeanLaughing from "../assets/gallery/DC5ECE17-127F-48B1-BF99-051A5C030E8E.JPG";
import caribbeanStools from "../assets/gallery/E1263F41-C13F-4E12-BFB7-E6BA4F906AB8.JPG";
import caribbeanTalking from "../assets/gallery/ED403E85-1DD1-4B03-9CCC-C7BFFE90C614.JPG";
import greekCounter from "../assets/gallery/IMG_EE14549694A4-1.jpeg";
import dishoomCounter from "../assets/gallery/IMG_8506.jpg";
import dishoomRice from "../assets/gallery/IMG_8507.jpg";

export const gallery = [
  {
    src: augustCounter,
    alt: "Guests filling their plates from the foil trays along the counter at Sauté Sundays",
    event: "Summer Isn't Over Yet, August 2026",
  },
  {
    src: augustServing,
    alt: "A guest spooning food onto her plate at the counter, the room busy behind her",
    event: "Summer Isn't Over Yet, August 2026",
  },
  {
    src: augustTalking,
    alt: "Four guests standing with full plates, talking over the counter at Sauté Sundays",
    event: "Summer Isn't Over Yet, August 2026",
  },
  {
    src: augustWall,
    alt: "Guests standing along the wall with plates and bowls, eating and talking",
    event: "Summer Isn't Over Yet, August 2026",
  },
  {
    src: vietnameseGroup,
    alt: "Four guests sitting together with their plates at Sauté Sundays, one flashing a peace sign at the camera",
    event: "Vietnamese's Kitchen, July 2026",
  },
  {
    src: vietnamesePair,
    alt: "Two guests sharing a container of food in front of the Jrew's window at Sauté Sundays",
    event: "Vietnamese's Kitchen, July 2026",
  },
  {
    src: caribbeanServing,
    alt: "A guest serving herself from a foil tray at the Sauté Sundays table, with fritters, slaw and bread lined up alongside",
    event: "Caribbean Night, June 2026",
  },
  {
    src: caribbeanPatties,
    alt: "A cook in a patterned hat lifting freshly baked patties off a tray in the kitchen at Sauté Sundays",
    event: "Caribbean Night, June 2026",
  },
  {
    src: caribbeanTrio,
    alt: "Three guests standing arm in arm at Sauté Sundays, one still holding the glass dish she brought to share",
    event: "Caribbean Night, June 2026",
  },
  {
    src: caribbeanPlating,
    alt: "A guest spooning food onto her plate at Sauté Sundays, beside a labelled bake and a tray of noodles",
    event: "Caribbean Night, June 2026",
  },
  {
    src: caribbeanFullPlate,
    alt: "A guest holding a full plate above a tray of arroz con pollo, one of the labelled dishes on the Sauté Sundays table",
    event: "Caribbean Night, June 2026",
  },
  {
    src: caribbeanLaughing,
    alt: "A guest laughing with a plate in one hand and a bowl in the other, next to a table of labelled dishes at Sauté Sundays",
    event: "Caribbean Night, June 2026",
  },
  {
    src: caribbeanStools,
    alt: "Two guests eating and talking at Sauté Sundays, one perched on a rattan stool with a plate balanced on her hand",
    event: "Caribbean Night, June 2026",
  },
  {
    src: caribbeanTalking,
    alt: "Two guests deep in conversation with their plates on their laps at Sauté Sundays",
    event: "Caribbean Night, June 2026",
  },
  {
    src: greekCounter,
    alt: "Guests working their way along the counter at Sauté Sundays, filling bowls from labelled trays and a stockpot",
    event: "Greek Cuisine, March 2026",
  },
  {
    src: dishoomCounter,
    alt: "Guests helping themselves at the counter during Sauté Sundays, with pastries, dal and glass dishes spread along it",
    event: "Dishoom, November 2025",
  },
  {
    src: dishoomRice,
    alt: "A guest serving herself rice while another lifts flatbread from a tray at Sauté Sundays",
    event: "Dishoom, November 2025",
  },
];
