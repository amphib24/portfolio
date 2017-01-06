var portfolio = [];

function Project(options){
  for (var key in options) {
    this[key] = options[key];
  }
  // this.title = options.title;
  // this.imageUrl = options.imageUrl
  // this.projectPage = options.projectPage
  // this.dateCreated = options.dateCreated;
}

Project.prototype.toHtml = function(){
  var source = $('#project-template').html();
  var templateRender = Handlebars.compile(source);
  this.daysAgo = parseInt((new Date() - new Date(this.dateCreated))/60/60/24/1000);
  this.publishStatus = this.dateCreated ? `published ${this.daysAgo} days ago`:
  '(draft)';
  return templateRender(this);
};
  // var $newProject = $('ul.galleryUl').clone();
  // $newProject.find('p').text(this.title);
  // $newProject.find('img').attr('src',this.imageUrl);
  // $newProject.find('a').attr('href', this.projectPage)
  // $newProject.find('time[pubdate]').attr('date',this.dateCreated)
  // $newProject.find('time').text(' completed ' + parseInt((new Date() - new Date(this.dateCreated))/60/60/24/1000) + ' days ago');
  // $newProject.removeClass('galleryUl')
  //
  // return $newProject;

projectsArray.sort(function(a, b) {
  return (new Date(b.dateCreated)) - (new Date(a.dateCreated));
});
projectsArray.forEach(function(element) {
  portfolio.push(new Project(element));
});
portfolio.forEach(function(a) {
  $('.flexslider').append(a.toHtml());
});
