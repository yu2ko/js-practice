function playTrackById(trackId) {
  /// отримати файл пісні та її запустити
}

function stopTrackById(trackId) {
  /// отримати файл пісні та поставити її на паузу
  console.log(`отримати файл пісні з ID ${trackId} i поставити на паузу`);
}

function play(trackName, trackId) {
  console.log(`Запускаємо ${trackName}`);
  playTrackById(trackId);
}

function end(oldTrackName, newTrackName) {
  console.log(`Завершили грати ${oldTrackName}`);
  console.log(`Наступний трек ${newTrackName}`);
}

function pauseStop(currentTrackName) {
  console.log(`Tрек ${currentTrackName} на паузі`);
}

function pausePlay(currentTrackName) {
  console.log(`Tрек ${currentTrackName} на паузі`);
  reloadDataTrack();
  play();
}

// =======================================================
// curried function + memoization
// =======================================================
function pauseStopByTrack(trackName, trackId) {
  let isPause = null;

  return () => {
    if (isPause == true) {
      return;
    }
    stopTrackById(trackId);
    console.log(`Tрек ${trackName} на паузі`); // Tрек IT-Hello World! на паузі √ Tрек IT-Console log! на паузі
    isPause = true;
  };
}

const pauseStop456 = pauseStopByTrack("IT-Console log", 10);

pauseStop456();
pauseStop456();
pauseStop456();

// =======================================================
// curried function + memoization
// =======================================================
const memoCalcSpace = (oldAmount = null, oldUnit = null) => {
  return (amount, unit = "px") => {
    return `${amount * 4}${unit}`;
  };
};
