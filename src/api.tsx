import axios from "axios";

export async function fetchQuestions() {
  return await axios.get("https://opentdb.com/api.php?amount=10");
}
