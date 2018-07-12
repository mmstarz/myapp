flexible gallery inside modal that correctly shows number of elements

used 
empty arrays at render start for every element

changed true/false state. that triggers every time parent element called.

render() {

    let galleryIndicators = []
    let galleryItems = []    
    let isActiveCheck = ''

    if(this.state.flipped === true) {
      console.log('render happend')
      
      galleryIndicators = (
        this.state.carList[flag].images.map((image, index) => {
          
        if (index === 0) {
          isActiveCheck = 'active'
        } else {
          isActiveCheck = ''
        }
        
        return (<li key={'indicator-' + image.id} data-target={"#carouselinside" + this.state.carList[flag].id} data-slide-to={index} className={isActiveCheck}></li>)        
      })) 
      
      galleryItems = (
        this.state.carList[flag].images.map((image, index) => { 
        if (index === 0) {
          isActiveCheck = 'active'
        } else {
          isActiveCheck = ''
        }
        
        return(
          <div key={'itemNum-' + image.id} className={"carousel-item " + isActiveCheck} onDragEnd={(event) => {this.dragTaskGallery(event)}}>
            <img className="img-fluid rounded img-nofade" src={image.img} alt={"Responsive pic " + index + 1} />
            <div className="carousel-caption d-none d-md-block text-danger">
              <h3>Picture {index + 1}</h3>
              <p>{ this.state.carList[flag].trademark }, { this.state.carList[flag].model }, { this.state.carList[flag].year }</p>
              <p>{ this.state.carList[flag].title }</p>
            </div>
          </div>)
      }))     
    }  

    console.log(galleryItems)
... 
    return()
}