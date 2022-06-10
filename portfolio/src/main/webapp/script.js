// Copyright 2020 Google LLC
//
// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
//
//     https://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.

/**
 * Adds a random greeting to the page.
 */
function addRandomGreeting() {
  const greetings =
      ['Hello world!', '¡Hola Mundo!', '你好，世界！', 'Bonjour le monde!'];

  // Pick a random greeting.
  const greeting = greetings[Math.floor(Math.random() * greetings.length)];

  // Add it to the page.
  const greetingContainer = document.getElementById('greeting-container');
  greetingContainer.innerText = greeting;
}

function addRandomQuote() {
    const quotes =
        ['Go ahead, make my day!', 'After all, tomorrow is another day!', 'Mankind was born on Earth. It was never meant to die here', 
        'We laughed and kept saying"see u soon", but inside we both knew we would never see each other again.'];
  
    // Pick a random greeting.
    const quote = quotes[Math.floor(Math.random() * quotes.length)];
  
    // Add it to the page.
    const quoteContainer = document.getElementById('quotes-container');
    quoteContainer.innerText = quote;
  }

  async function showHello() {
    const responseFromServer = await fetch('/hello');
    const textFromResponse = await responseFromServer.json();
  
    const helloContainer = document.getElementById('hello-container');

    helloContainer.innerText = textFromResponse[Math.floor(Math.random() * textFromResponse.length)];

    // console.log(textFromResponse.get(0));
    // console.log(textFromResponse.get(1));
    // console.log(textFromResponse.get(2));
  }