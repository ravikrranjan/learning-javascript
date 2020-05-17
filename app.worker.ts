/// <reference lib="webworker" />

addEventListener('message', async (event) => {



  console.log('Inside Worker--', event);
  let { id, query } = event.data;
  if (id == 2 || id == 1) query.url = `${query.url}${id}`
  let response = await fetch(`${query.url}?id=${id}`);
  let result = await response.blob();

  console.log('Fetch Respones', result);

  // postMessage({
  //   id,
  //   data: json
  // });

  // postMessage(response);

});
//   const {
//     id,
//     query
//   } = event.data;
//   console.log('---', fetch);
//   fetch(query.url)
//     .then((json) => {
//       postMessage({
//         id,
//         data: json
//       });
//     }).catch((ex) => {
//       console.log('--ex--', ex);
//       postMessage({
//         id,
//         error: ex
//       });
//     });

//   postMessage(response);
// });
