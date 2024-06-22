import { collection, getDocs, query } from "firebase/firestore";
import { db } from "../firebase";

function getExperiences(callback) {
  getDocs(query(collection(db, 'experiences')))
    .then((querySnapshot) => {
      const experiences = [];
      querySnapshot.forEach(doc => {
        const _document = doc.data();
        const startTime = _document.startTime;
        const endTime = _document.endTime
        experiences.push({
          ..._document,
          startTime: new Date(startTime.seconds * 1000 + startTime.nanoseconds / 1000000),
          endTime: endTime ? new Date(endTime.seconds * 1000 + endTime.nanoseconds / 1000000) : null
        });
      });
      const sortedExp = experiences.sort((a, b) => b.startTime - a.startTime);
      callback(sortedExp);
    })
    .catch(error => {
      console.log("Error getting documents: ", error);
    })
}

function getProjects(callback) {
  getDocs(query(collection(db, 'projects')))
    .then((querySnapshot) => {
      const portfolioes = [];
      querySnapshot.forEach(doc => { 
        const _document = doc.data();
        const createdAt = _document.createdAt;
        portfolioes.push({
          ..._document,
          createdAt: new Date(createdAt.seconds * 1000 + createdAt.nanoseconds / 1000000)
        });
      });
      const sortedPortfolioes = portfolioes.sort((a, b) => b.createdAt - a.createdAt);
      callback(sortedPortfolioes);
    })
    .catch(error => {
      console.log("Error getting documents: ", error);
    })
}

export { getExperiences, getProjects }
