function init_cfg()
    cfg = Dict{String, String}()

    cfg["resistance_file"] = "(browse to resistance file)"
    cfg["source_file"] = "(browse to source file)"
    cfg["project_name"] = "(filename prefix for project)"

    cfg["parallelize"] = "true"
    cfg["parallel_batch_size"] = "10"

    cfg["block_size"] = "1"
    cfg["radius"] = "(choose source radius)"
    cfg["buffer"] = "0"
    cfg["source_threshold"] = "0"
    cfg["source_from_resistance"] = "false"
    cfg["r_cutoff"] = "0.0"

    cfg["calc_flow_potential"] = "true"
    cfg["correct_artifacts"] = "true"

    cfg["write_raw_currmap"] = "true"
    cfg["write_normalized_currmap"] = "true"
    cfg["write_flow_potential"] = "true"

    cfg["conditional"] = "false"
    cfg["n_conditions"] = "1"
    cfg["condition1_file"] = "(browse to condition 1 file)"
    cfg["condition2_file"] = "(browse to condition 2 file)"
    cfg["comparison1"] = "within"
    cfg["comparison2"] = "within"
    cfs["condition1_threshold"] = "0"
    cfg["condition2_threshold"] = "0"
end

function update_cfg!(cfg, cfg_new)
    for (key,val) in cfg_new
        cfg[key] = val
    end
end

function parse_cfg(path::String)
    cf = init_cfg()
    f = open(path, "r")
    for i in eachline(f, keep = true)
        if first(i) == '['
            continue
        end
        idx = something(findfirst(isequal('='), i), 0)
        var = rstrip(i[1:idx - 1])
        val = strip(i[idx + 1:end])
        cf[var] = val
    end
    close(f)
    cf
end

function init_csdict(cfg)
    a = Dict{String, String}()

    a["ground_file_is_resistances"] = "True"
    a["use_direct_grounds"] = "False"

    a["output_file"] = "temp"
    a["write_cum_cur_map_only"] =  "False"

    a["scenario"] = "Advanced"

    a
end

function init_ascii_header()
    ascii_header = Dict{String, String}()
    ascii_header["ncols"] = ""
    ascii_header["nrows"] = ""
    ascii_header["xllcorner"] = "0"
    ascii_header["yllcorner"] = "0"
    ascii_header["cellsize"] = "1"
    ascii_header["nodata_value"] = "-9999"

    ascii_header
end