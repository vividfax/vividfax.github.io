---
layout: post
title:  "Assign a material to an object in Blender with Python"
---
{::options parse_block_html="true" /}

<div class="col-12 offset-sm-0 col-md-8 offset-md-2 col-lg-6 offset-lg-3 vertical-center">

#### Assign a material to an object in Blender using Python
14 January 2021

<br>


This is how to create a new material, add a shader, create a new object and assign the material to the object in Blender using Python.

First, create a new material. The function takes a string as the name for the new material.

```
import bpy

def newMaterial(id):

    mat = bpy.data.materials.get(id)

    if mat is None:
        mat = bpy.data.materials.new(name=id)

    mat.use_nodes = True

    if mat.node_tree:
        mat.node_tree.links.clear()
        mat.node_tree.nodes.clear()

    return mat
```

Then add a shader to the material. Input the type of shader (i.e. diffuse, emission, glossy) and the rgb colour.

```
def newShader(id, type, r, g, b):

    mat = newMaterial(id)

    nodes = mat.node_tree.nodes
    links = mat.node_tree.links
    output = nodes.new(type='ShaderNodeOutputMaterial')

    if type == "diffuse":
        shader = nodes.new(type='ShaderNodeBsdfDiffuse')
        nodes["Diffuse BSDF"].inputs[0].default_value = (r, g, b, 1)

    elif type == "emission":
        shader = nodes.new(type='ShaderNodeEmission')
        nodes["Emission"].inputs[0].default_value = (r, g, b, 1)
        nodes["Emission"].inputs[1].default_value = 1

    elif type == "glossy":
        shader = nodes.new(type='ShaderNodeBsdfGlossy')
        nodes["Glossy BSDF"].inputs[0].default_value = (r, g, b, 1)
        nodes["Glossy BSDF"].inputs[1].default_value = 0

    links.new(shader.outputs[0], output.inputs[0])

    return mat
```

Then create the object, assign the material and call the function.

```
def drawObject():

    mat = newShader("Shader1", "diffuse", 1, 1, 1)
    bpy.ops.mesh.primitive_cube_add(size=2, align='WORLD', location=(0, 0, 0))
    bpy.context.active_object.data.materials.append(mat)

drawObject()
```
</div>
