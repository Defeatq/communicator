function playSound(phrase) {
  const isNotPlaying = !speechSynthesis.pending;

  if ( isNotPlaying ) {
    speechSynthesis.speak(
      new SpeechSynthesisUtterance( phrase )
    );
  }
}

export { playSound };
