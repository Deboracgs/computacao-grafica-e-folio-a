import * as THREE from 'https://cdnjs.cloudflare.com/ajax/libs/three.js/r123/three.module.min.js';
            
function lineMP(par1, par2) {
    const renderer = new THREE.WebGLRenderer();
    renderer.setSize( window.innerWidth, window.innerHeight );
    document.body.appendChild( renderer.domElement );

    const camera = new THREE.PerspectiveCamera( 45, window.innerWidth / window.innerHeight, 1, 500 );
    camera.position.set( 0, 0, 100 );
    camera.lookAt( 0, 0, 0 );

    const scene = new THREE.Scene();

    const material = new THREE.LineBasicMaterial( { color: "red" } );
    
    const points = [];
    points.push( new THREE.Vector2(par1[0], par1[1]) );
    points.push( new THREE.Vector2(par2[0], par2[1])  );

    const geometry = new THREE.BufferGeometry().setFromPoints( points );

    const line = new THREE.Line( geometry, material );

    scene.add( line );
    renderer.render( scene, camera );
}

window.lineMP = lineMP