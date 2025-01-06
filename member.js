function skillsMember() {
  return {
    skills: ['JavaScript', 'React', 'Node', 'MongoDB'],
    showSkills: function () {
      this.skills.forEach((skill) => {
        console.log(`${skill}`);
      });
    },
  };
}