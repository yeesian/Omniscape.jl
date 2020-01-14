var documenterSearchIndex = {"docs":
[{"location":"#Omniscape.jl-1","page":"Home","title":"Omniscape.jl","text":"","category":"section"},{"location":"#","page":"Home","title":"Home","text":"A package to compute omnidirectional landscape connectivity.","category":"page"},{"location":"#","page":"Home","title":"Home","text":"Package repository: https://github.com/Circuitscape/Omniscape.jl","category":"page"},{"location":"#","page":"Home","title":"Home","text":"note: Note\nThis package is currently in the early stages of development. Please test it out and post issues to the GitHub repo with any bugs, feature requests, or questions.","category":"page"},{"location":"#Installation-1","page":"Home","title":"Installation","text":"","category":"section"},{"location":"#","page":"Home","title":"Home","text":"using Pkg; Pkg.add(\"Omniscape\")","category":"page"},{"location":"#Overview-1","page":"Home","title":"Overview","text":"","category":"section"},{"location":"#","page":"Home","title":"Home","text":"This package implements the omnidirectional connectivity algorithm developed by McRae et al. (2016). Omniscape.jl is a moving window implementation of Circuitscape.jl (Anantharaman et al. 2019). Circuitscape.jl applies circuit theory to make spatially-explicit predictions of connectivity using concepts developed by McRae (2006) and McRae et al. (2008).","category":"page"},{"location":"#References-1","page":"Home","title":"References","text":"","category":"section"},{"location":"#","page":"Home","title":"Home","text":"[1] Anantharaman, R., Hall, K., Shah, V., & Edelman, A. (2019). Circuitscape in Julia: High Performance Connectivity Modelling to Support Conservation Decisions. arXiv preprint arXiv:1906.03542.","category":"page"},{"location":"#","page":"Home","title":"Home","text":"[2] McRae, B. H. (2006). Isolation by resistance. Evolution, 60(8), 1551-1561.","category":"page"},{"location":"#","page":"Home","title":"Home","text":"[3] McRae, B. H., Dickson, B. G., Keitt, T. H., & Shah, V. B. (2008). Using circuit theory to model connectivity in ecology, evolution, and conservation. Ecology, 89(10), 2712-2724.","category":"page"},{"location":"#","page":"Home","title":"Home","text":"[4] McRae, B. H., Popper, K., Jones, A., Schindel, M., Buttrick, S., Hall, K., Unnasch, B. & Platt, J. (2016). Conserving nature’s stage: mapping omnidirectional connectivity for resilient terrestrial landscapes in the Pacific Northwest. The Nature Conservancy, Portland, Oregon.","category":"page"},{"location":"usage/#Usage-1","page":"Usage","title":"Usage","text":"","category":"section"},{"location":"usage/#Running-Omniscape-1","page":"Usage","title":"Running Omniscape","text":"","category":"section"},{"location":"usage/#","page":"Usage","title":"Usage","text":"To use Omniscape, simply run the following Julia code after Omniscape.jl has been installed.","category":"page"},{"location":"usage/#","page":"Usage","title":"Usage","text":"using Omniscape\nrun_omniscape(\"path/to/config/file.ini\")","category":"page"},{"location":"usage/#","page":"Usage","title":"Usage","text":"file.ini is a file specifying input data paths and options for Omniscape. See this link for an example .ini file. The arguments specified in the .ini file are described in detail below.","category":"page"},{"location":"usage/#Parallel-Processing-1","page":"Usage","title":"Parallel Processing","text":"","category":"section"},{"location":"usage/#","page":"Usage","title":"Usage","text":"Omniscape uses parallel processing by default, but currently, Julia requires that the number of parallel threads to use be specified outside of via an environment variable called JULIA_NUM_THREADS. This environment variable needs to be defined prior to launching Julia from the terminal.","category":"page"},{"location":"usage/#","page":"Usage","title":"Usage","text":"Example to set up Julia with 4 threads:","category":"page"},{"location":"usage/#","page":"Usage","title":"Usage","text":"On Linux/Mac:","category":"page"},{"location":"usage/#","page":"Usage","title":"Usage","text":"export JULIA_NUM_THREADS=4\njulia","category":"page"},{"location":"usage/#","page":"Usage","title":"Usage","text":"On Windows:","category":"page"},{"location":"usage/#","page":"Usage","title":"Usage","text":"set JULIA_NUM_THREADS=4\njulia","category":"page"},{"location":"usage/#Arguments-1","page":"Usage","title":"Arguments","text":"","category":"section"},{"location":"usage/#resistance_file-1","page":"Usage","title":"resistance_file","text":"","category":"section"},{"location":"usage/#","page":"Usage","title":"Usage","text":"The path to the resistance layer input. Currently, the resistance surface must be in ASCII raster format with the following header format:","category":"page"},{"location":"usage/#","page":"Usage","title":"Usage","text":"ncols         30\nnrows         30\nxllcorner     0\nyllcorner     0\ncellsize      1\nnodata_value  -9999","category":"page"},{"location":"usage/#","page":"Usage","title":"Usage","text":"This is the format used by both QGIS and ArcMap GIS software.","category":"page"},{"location":"usage/#source_file-1","page":"Usage","title":"source_file","text":"","category":"section"},{"location":"usage/#","page":"Usage","title":"Usage","text":"The path to the source layer input. The source layer must also be in ASCII raster format, and all values must be geq 0. This raster must have an identical number of rows, columns, lower left corner coordinates, and cellsize as the resistance layer.","category":"page"},{"location":"usage/#radius-1","page":"Usage","title":"radius","text":"","category":"section"},{"location":"usage/#","page":"Usage","title":"Usage","text":"A positive integer specifying the radius in pixels of the moving window used to identify sources to connect to each target.","category":"page"},{"location":"usage/#buffer-1","page":"Usage","title":"buffer","text":"","category":"section"},{"location":"usage/#","page":"Usage","title":"Usage","text":"Defaults to 0. A positive integer specifying an additional buffer distance beyond radius to clip the resistance and source layers to for each moving window iteration. If 0, resistance and source layers will be clipped to a circle of size radius for each moving window iteration.","category":"page"},{"location":"usage/#block_size-1","page":"Usage","title":"block_size","text":"","category":"section"},{"location":"usage/#","page":"Usage","title":"Usage","text":"An odd, positive integer specifying the side length for source layer blocking in target generation. Defaults to 1.","category":"page"},{"location":"usage/#source_threshold-1","page":"Usage","title":"source_threshold","text":"","category":"section"},{"location":"usage/#","page":"Usage","title":"Usage","text":"Defaults to 0. The minimum value that a pixel must be in the source layer to be included as a source.","category":"page"},{"location":"usage/#project_name-1","page":"Usage","title":"project_name","text":"","category":"section"},{"location":"usage/#","page":"Usage","title":"Usage","text":"The name of the project to use. This string will be appended as a prefix to all output files.","category":"page"},{"location":"usage/#calc_flow_potential-1","page":"Usage","title":"calc_flow_potential","text":"","category":"section"},{"location":"usage/#","page":"Usage","title":"Usage","text":"One of true, false. Specify whether to calculate flow potential. Defaults to true.","category":"page"},{"location":"usage/#mask_nodata-1","page":"Usage","title":"mask_nodata","text":"","category":"section"},{"location":"usage/#","page":"Usage","title":"Usage","text":"One of true, false. Specify whether to mask current flow outputs according to NoData values in resistance surface. (i.e. pixels in current flow outputs that line up with NoData values in resistance are set to no data if mask_nodata = true). Defaults to true.","category":"page"},{"location":"usage/#write_raw_currmap-1","page":"Usage","title":"write_raw_currmap","text":"","category":"section"},{"location":"usage/#","page":"Usage","title":"Usage","text":"One of true, false. Specify whether to save the raw current map (prior to normalization by flow potential) as output. Defaults to true.","category":"page"},{"location":"usage/#write_normalized_currmap-1","page":"Usage","title":"write_normalized_currmap","text":"","category":"section"},{"location":"usage/#","page":"Usage","title":"Usage","text":"One of true, false. Specify whether to save the normalized current map as output. Normalized current is calculated as raw current divided by flow potential. Defaults to true.","category":"page"},{"location":"usage/#write_flow_potential-1","page":"Usage","title":"write_flow_potential","text":"","category":"section"},{"location":"usage/#","page":"Usage","title":"Usage","text":"One of true, false. Specify whether to save the raw flow potential map as output. Defaults to true.","category":"page"},{"location":"usage/#parallelize-1","page":"Usage","title":"parallelize","text":"","category":"section"},{"location":"usage/#","page":"Usage","title":"Usage","text":"One of true, false. Specify whether to use parallel processing. Defaults to true.","category":"page"},{"location":"usage/#parallel_batch_size-1","page":"Usage","title":"parallel_batch_size","text":"","category":"section"},{"location":"usage/#","page":"Usage","title":"Usage","text":"The batch size (number of jobs) to send to each parallel worker. Particularly in cases where single solves are very fast, setting this to a larger number can reduce I/O overhead when scheduling/sending jobs to parallel workers. If set too high, then you will not be fully utilizing parallel workers. Defaults to 10.","category":"page"},{"location":"usage/#correct_artifacts-1","page":"Usage","title":"correct_artifacts","text":"","category":"section"},{"location":"usage/#","page":"Usage","title":"Usage","text":"One of true, false. Specify if artifacts introduced from using block_size greater than 1 should be corrected. Defaults to true.","category":"page"},{"location":"usage/#source_from_resistance-1","page":"Usage","title":"source_from_resistance","text":"","category":"section"},{"location":"usage/#","page":"Usage","title":"Usage","text":"One of true, false. Should a source layer be derived using the resistance layer? If true, sources are calculated as the inverse of the resistance layer, and therefore it is not recommended that your resistance layer contain values less than 1. Sources will be set to 0 for all cells with a resistance greater than r_cutoff. Defaults to false.","category":"page"},{"location":"usage/#r_cutoff-1","page":"Usage","title":"r_cutoff","text":"","category":"section"},{"location":"usage/#","page":"Usage","title":"Usage","text":"The maximum resistance value a cell can have to be considered as a source. Only applies when source_from_resistance = true.","category":"page"},{"location":"usage/#Conditional-connectivity-options-1","page":"Usage","title":"Conditional connectivity options","text":"","category":"section"},{"location":"usage/#conditional-1","page":"Usage","title":"conditional","text":"","category":"section"},{"location":"usage/#","page":"Usage","title":"Usage","text":"One of true, false. Should conditional source/target matching be uses? That is, should a given target only be connected to sources that are meet similarity conditions to the target? Defaults to false. If true, then gridded data with values for each pixel are used to compare targets and sources and determine which pairs should be connected according to user-specified criteria.","category":"page"},{"location":"usage/#n_conditions-1","page":"Usage","title":"n_conditions","text":"","category":"section"},{"location":"usage/#","page":"Usage","title":"Usage","text":"The number of conditions that must be met for conditional source/target matching. One of 1, 2. Only applies if conditional = true. Defaults to 1.","category":"page"},{"location":"usage/#comparison1-1","page":"Usage","title":"comparison1","text":"","category":"section"},{"location":"usage/#","page":"Usage","title":"Usage","text":"One of within or equal. Only applies of conditional= true. How should conditions be compared when determining whether to connect a source/target pair. If within, then the value of condition 1 for the source must be within the following range, where target is the value at the target pixel or block: (target + condition1_lower, target + condition1_upper).  condition1_lower and condition1_upper are explained further below. If equal, then the value at the source pixel must be equal to the value at the target pixel. Defaults to within.","category":"page"},{"location":"usage/#comparison2-1","page":"Usage","title":"comparison2","text":"","category":"section"},{"location":"usage/#","page":"Usage","title":"Usage","text":"One of within or equal.  Only applies of conditional= true and n_conditions = 2. How should conditions be compared when determining whether to connect a source/target pair. If within, then the value of condition 2 for the source must be within the following range, where target is the value at the target pixel or block: (target + condition2_lower, target + condition2_upper).  condition2_lower and condition2_upper are explained further below. If equal, then the value at the source pixel must be equal to the value at the target pixel. Defaults to within.","category":"page"},{"location":"usage/#condition1_lower-1","page":"Usage","title":"condition1_lower","text":"","category":"section"},{"location":"usage/#","page":"Usage","title":"Usage","text":"Number. Only applies if comparison1 = within. The maximum negative deviation that a potential source's condition 1 value may be from the corresponding value in the target in order to be connected. If condition1_lower = -1, then a source may have a condition 1 value up to 1 unit smaller than the target's value and it will still be connected.","category":"page"},{"location":"usage/#condition1_upper-1","page":"Usage","title":"condition1_upper","text":"","category":"section"},{"location":"usage/#","page":"Usage","title":"Usage","text":"Number. Only applies if comparison1 = within. The maximum positive deviation that a potential source's condition 1 value may be from the corresponding value in the target in order to be connected. If condition1_lower = 1, then a source may have a condition 1 value up to 1 unit larger than the target's value and it will still be connected.","category":"page"},{"location":"usage/#condition2_lower-1","page":"Usage","title":"condition2_lower","text":"","category":"section"},{"location":"usage/#","page":"Usage","title":"Usage","text":"Number. Only applies if n_conditions = 2 and comparison1 = within. The maximum negative deviation that a potential source's condition 2 value may be from the corresponding value in the target in order to be connected. If condition2_lower = -1, then a source may have a condition 2 value up to 1 unit smaller than the target's value and it will still be connected.","category":"page"},{"location":"usage/#condition2_upper-1","page":"Usage","title":"condition2_upper","text":"","category":"section"},{"location":"usage/#","page":"Usage","title":"Usage","text":"Number. Only applies if n_conditions = 2 and comparison1 = within. The maximum positive deviation that a potential source's condition 2 value may be from the corresponding value in the target in order to be connected. If condition2_lower = 1, then a source may have a condition 2 value up to 1 unit larger than the target's value and it will still be connected.","category":"page"},{"location":"usage/#compare_to_future-1","page":"Usage","title":"compare_to_future","text":"","category":"section"},{"location":"usage/#","page":"Usage","title":"Usage","text":"One of none, 1, 2, or both. Which condition(s) should compare the future condition in targets with present-day conditions in sources when determining which pairs to connect? For any conditions that are included, two data layers are needed: one with future condition values for all pixels in the study area, and one for present day condition values for all pixels in the study area.","category":"page"},{"location":"usage/#condition1_present_file-1","page":"Usage","title":"condition1_present_file","text":"","category":"section"},{"location":"usage/#","page":"Usage","title":"Usage","text":"The file path to the data representing condition one in present day. Only needed if conditional = true. The source layer must be in ASCII raster format. This raster must have an identical number of rows and columns, lower left corner coordinates, and cellsize as the resistance layer.","category":"page"},{"location":"usage/#condition1_future_file-1","page":"Usage","title":"condition1_future_file","text":"","category":"section"},{"location":"usage/#","page":"Usage","title":"Usage","text":"The file path to the data representing condition one in the future. Only needed if conditional = true and compare_to_future = 1 or compare_to_future = both. The source layer must be in ASCII raster format. This raster must have an identical number of rows and columns, lower left corner coordinates, and cellsize as the resistance layer.","category":"page"},{"location":"usage/#condition2_present_file-1","page":"Usage","title":"condition2_present_file","text":"","category":"section"},{"location":"usage/#","page":"Usage","title":"Usage","text":"The file path to the data representing condition two in present day. Only needed if conditional = true and n_conditions = 2. The source layer must be in ASCII raster format. This raster must have an identical number of rows and columns, lower left corner coordinates, and cellsize as the resistance layer.","category":"page"},{"location":"usage/#condition2_future_file-1","page":"Usage","title":"condition2_future_file","text":"","category":"section"},{"location":"usage/#","page":"Usage","title":"Usage","text":"The file path to the data representing condition two in the future. Only needed if conditional = true and n_conditions = 2 and compare_to_future = 2 or compare_to_future = both. The source layer must be in ASCII raster format. This raster must have an identical number of rows and columns, lower left corner coordinates, and cellsize as the resistance layer.","category":"page"}]
}
