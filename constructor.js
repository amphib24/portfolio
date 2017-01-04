var portfolio = [];

function Projects(name){
  this.name = name;
  this.image = 'images/' + name + '.jpg';
  this.title = options.title;
  this.createdOn = options.createdOn;
}

Projects.prototype.toHtml = function(){
  var $newProject = $('#gallery').clone();
  $newProject.find('p').text(this.title);
  $newProject.find('a').attr('href',this.image);
  $newProject.find().(this.date)
}
