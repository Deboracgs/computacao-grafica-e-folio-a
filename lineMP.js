import * as THREE from 'https://cdnjs.cloudflare.com/ajax/libs/three.js/r123/three.module.min.js';
            
function lineMP(par1, par2) {


    const material = new THREE.LineBasicMaterial( { color: "red" } );
    
    const points = [];
    points.push( new THREE.Vector2(par1[0], par1[1]) );
    points.push( new THREE.Vector2(par2[0], par2[1])  );

    const geometry = new THREE.BufferGeometry().setFromPoints( points );

    const line = new THREE.Line( geometry, material );

    return line
}

window.lineMP = lineMP