class View {
  render(track) {
    const yourTeamName = 'КОТЫ-ВОИТЕЛИ';
    console.clear();
    console.log(track.join(''));
    console.log('\n\n');
    console.log(`Сделали "${yourTeamName}" с любовью`);
  }
}
module.exports = View;
