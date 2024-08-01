var documenterSearchIndex = {"docs":
[{"location":"contributing/#Contributing","page":"Contributing","title":"Contributing","text":"","category":"section"},{"location":"contributing/#How-to-Contribute","page":"Contributing","title":"How to Contribute","text":"","category":"section"},{"location":"contributing/","page":"Contributing","title":"Contributing","text":"We welcome contributions! To get started, follow these steps:","category":"page"},{"location":"contributing/","page":"Contributing","title":"Contributing","text":"Fork the repository on GitHub.\nClone your fork to your local machine.\nCreate a new branch for your feature or bugfix.\nMake your changes.\nCommit and push your changes to your fork.\nSubmit a pull request to the main repository.","category":"page"},{"location":"contributing/","page":"Contributing","title":"Contributing","text":"Thank you for contributing to TaskBasedProduction.jl!","category":"page"},{"location":"examples/","page":"Examples","title":"Examples","text":"```julia using Revise using TaskBasedProduction  using SpecialFunctions using QuadGK","category":"page"},{"location":"examples/","page":"Examples","title":"Examples","text":"θ = 1.0 κ = 0.5 z = 1.2 αVec = [0.1, 0.2, 0.3] labor_input=[0.5; 0.04; 0.19;;]","category":"page"},{"location":"examples/","page":"Examples","title":"Examples","text":"initialguess=findinitialguess(θ, κ, z, αVec; threshold=1e-2) q, xT, fval = prodfun(laborinput, θ, κ, z, αVec; initialguess=initialguess,  xtol=1e-10)","category":"page"},{"location":"examples/","page":"Examples","title":"Examples","text":"println(\"Quantity Produced: \", q) println(\"Task Thresholds: \", xT) println(\"Approximation error: \", fval)","category":"page"},{"location":"examples/#Call-unitInputDemand-and-print-the-output","page":"Examples","title":"Call unitInputDemand and print the output","text":"","category":"section"},{"location":"examples/","page":"Examples","title":"Examples","text":"laborinput2 = q*unitInputDemand( xT, θ, κ, z, αVec) println(\"Labor Demand: \", laborinput2) println(\"Error\", laborinput2-laborinput)","category":"page"},{"location":"examples/#Call-margProdLabor-with-labor-demand-and-print-the-output","page":"Examples","title":"Call margProdLabor with labor demand and print the output","text":"","category":"section"},{"location":"examples/","page":"Examples","title":"Examples","text":"MPL= margProdLabor(labor_input,  θ, κ, z, αVec) println(\"Marginal Products of Labor (with labor demand): \",MPL)","category":"page"},{"location":"examples/","page":"Examples","title":"Examples","text":"MPL= margProdLabor(labor_input,  θ, κ, z, αVec, xT) println(\"Marginal Products of Labor (with labor demand): \",MPL)","category":"page"},{"location":"examples/#Call-elasticity_substitution-with-labor-demand,-MPL,-xT-and-parameters-of-the-gamma-function","page":"Examples","title":"Call elasticity_substitution with labor demand, MPL, xT and parameters of the gamma function","text":"","category":"section"},{"location":"examples/","page":"Examples","title":"Examples","text":"ϵsub, ϵcompl=elasticitysubcomp(laborinput, θ, κ, z, αVec, MPL, xT) println(\"Allen partial elasticity of substitution:\", ϵsub) println(\"Hicks partial elasticity of substitution:\", ϵ_compl)","category":"page"},{"location":"examples/#GENERAL-PARAMETERIZATION-OF-FUNCTIONS","page":"Examples","title":"GENERAL PARAMETERIZATION OF FUNCTIONS","text":"","category":"section"},{"location":"examples/#Define-the-density-function-b_g(x)","page":"Examples","title":"Define the density function b_g(x)","text":"","category":"section"},{"location":"examples/","page":"Examples","title":"Examples","text":"bg(x) = (x^(κ-1) * exp(-x/θ)) / (θ^κ * gamma(κ)) eh1(x)=exp(0.1x) e_h2(x)=exp(0.2x) eh3(x)=exp(0.3*x) eh = [eh1, eh2, eh3]  # Example eh functions","category":"page"},{"location":"examples/","page":"Examples","title":"Examples","text":"initialguessgen=findinitialguessgen(z, bg, eh; threshold=1e-2, verbose=false) qgen, xTgen,fval= prodfungeneral(laborinput,z,bg, eh; initialguess=initialguess_gen)","category":"page"},{"location":"examples/","page":"Examples","title":"Examples","text":"laborinputgeneral =qgen* unitInputDemandgeneral(xTgen, z, bg, eh) println(\"Labor Demand: \", laborinputgeneral) isapprox(laborinput, laborinputgeneral, atol=1e-6)","category":"page"},{"location":"examples/","page":"Examples","title":"Examples","text":"println(\"Quantity Produced: \", qgen) println(\"Task Thresholds: \", xTgen) MPLgen=margProdLaborgeneral(laborinputgeneral, z, bg, eh, xTgen, qgen) ϵsubgen, ϵcomplgen=elasticitysubcompgeneral(laborinputgeneral, z, bg, eh, MPLgen, xT_gen)","category":"page"},{"location":"installation/","page":"Installation","title":"Installation","text":"```julia using Pkg  Pkg.add(url=\"https://github.com/haanwinckel/TaskBasedProduction.jl\")","category":"page"},{"location":"#TaskBasedProduction.jl","page":"Home","title":"TaskBasedProduction.jl","text":"","category":"section"},{"location":"","page":"Home","title":"Home","text":"Package for task-based production model.","category":"page"},{"location":"#Package-Features","page":"Home","title":"Package Features","text":"","category":"section"},{"location":"","page":"Home","title":"Home","text":"Unit input demand calculator\nGeneral unit input demand calculation\nGeneral production function evaluation\nSpecific production function evaluation\nMarginal productivity of labor calculation\nElasticity of substitution and complementarity calculation\nGeneral marginal productivity of labor calculation\nElasticity of substitution and complementarity calculation general case\nFind initial guess for Gamma function case \nFind initial guess for general density function case","category":"page"},{"location":"#Function-Documentation","page":"Home","title":"Function Documentation","text":"","category":"section"},{"location":"","page":"Home","title":"Home","text":"unitInputDemand\nunitInputDemand_general\nprod_fun_general\nprod_fun\nmargProdLabor\nelasticity_sub_comp\nmargProdLabor_general\nelasticity_sub_comp_general\nfind_initial_guess\nfind_initial_guess_gen","category":"page"},{"location":"#TaskBasedProduction.unitInputDemand","page":"Home","title":"TaskBasedProduction.unitInputDemand","text":"unitInputDemand(xT::AbstractArray{<:Real}, θ::Real, κ::Real, z::Real, αVec::AbstractArray{<:Real}, skipParamChecks::Bool = false) -> AbstractArray{<:Real}\n\nCalculates unit labor demands given blueprint scale θ, blueprint shape κ, productivity z, an array of comparative advantage values αVec with H elements (one for each worker type), and an array xT of H-1 thresholds in task space.\n\nArguments\n\nxT: An array of H-1 thresholds in task space.\nq: Quantity produced \nθ: Blueprint scale parameter.\nκ: Blueprint shape parameter.\nz: Productivity parameter.\nαVec: An array of comparative advantage values with H elements.\nskipParamChecks: A boolean indicating whether to skip parameter checks (default is false).\n\nReturns\n\nAn array representing the labor demand for each labor type.\n\n\n\n\n\n","category":"function"},{"location":"#TaskBasedProduction.unitInputDemand_general","page":"Home","title":"TaskBasedProduction.unitInputDemand_general","text":"unitInputDemand_general(xT::Vector{Float64}, z::Real, b_g::Function, e_h::Vector{Function}) -> Vector{Float64}\n\nCalculates unit labor demands given an array xT of H-1 thresholds in task space, a productivity value z,  a density function b_g for the task distribution, and an array e_h of H functions representing the cost of each labor type as a function of task complexity.\n\nThe function first verifies that b_g is a valid density function. Then it computes the labor demand for each labor type by numerically integrating the ratio b_g(x) / (z * e_h[h](x)) over the intervals defined by the thresholds in xT.\n\nArguments\n\nxT: A vector of H-1 thresholds in task space.\nq: Production value\nz: Productivity value.\nb_g: A density function for the task distribution.\ne_h: A vector of H functions representing the cost of each labor type as a function of task complexity.\n\nReturns\n\nA vector representing the labor demand for each labor type.\n\n\n\n\n\n","category":"function"},{"location":"#TaskBasedProduction.prod_fun_general","page":"Home","title":"TaskBasedProduction.prod_fun_general","text":"prod_fun_general(labor_input::AbstractArray{<:Real}, z::Real, b_g:: Function, e_h::Vector{Function}; initial_guess=nothing, x_tol=1e-12, f_tol=1e-12, g_tol=1e-12, iterations=1000, max_retries=5)\n\nCalculates the quantity produced (q), and task thresholds (xT) given labor inputs (laborinput), productivity z, general blueprint density function (bg), and a vector of efficiency functions (e_h), one for each labor type.\n\nInputs:\n\nlabor_input: Array of labor inputs of different types.\nz: Productivity parameter.\nb_g: Blueprint density function.\ne_h: Vector of efficiency functions, one for each type.\ninitial_guess: (optional) Initial guess for optimization. If not provided, defaults to zeros array.\nx_tol: (optional) Tolerance for the solution vector. Default is 1e-12.\nf_tol: (optional) Tolerance for the function value. Default is 1e-12.\ng_tol: (optional) Tolerance for the gradient. Default is 1e-12.\niterations: (optional) Maximum number of iterations for the optimization. Default is 1000.\nmax_retries: (optional) Maximum number of retries if the optimization fails. Default is 5.\n\nReturns:\n\nq: Quantity produced.\nxT: Array of task thresholds.\nfval: Final value of the objective function.\n\n\n\n\n\n","category":"function"},{"location":"#TaskBasedProduction.prod_fun","page":"Home","title":"TaskBasedProduction.prod_fun","text":"prod_fun(labor_input::AbstractArray{<:Real}, θ::Real, κ::Real, z::Real, αVec::AbstractArray{<:Real}; initial_guess=nothing, optim_options=nothing)\n\nCalculates the quantity produced (q), and task thresholds (xT) given labor inputs (l), blueprint scale θ, blueprint shape κ, productivity z, and an array of  comparative advantage values αVec with H elements (one for each worker type).\n\nInputs:\n\nlabor_input: Array of labor inputs of different types.\nθ: Blueprint scale parameter.\nκ: Blueprint shape parameter.\nz: Productivity parameter.\nαVec: Array of comparative advantage values with H elements.\ninitial_guess: (optional) Initial guess for optimization. If not provided, defaults to zeros array.\noptim_options: (optional) Optimization options. If not provided, defaults to high tolerance values.\n\nReturns:\n\nq: Quantity produced.\nxT: Array of task thresholds.\nfval: Final value of the objective function.\n\n\n\n\n\n","category":"function"},{"location":"#TaskBasedProduction.margProdLabor","page":"Home","title":"TaskBasedProduction.margProdLabor","text":"margProdLabor(labor_input::Union{AbstractArray{<:Real}, Nothing}, θ::Real, κ::Real, z::Real, αVec::AbstractArray{<:Real}; xT=nothing, q=nothing) -> AbstractArray{<:Real}\n\nCalculates the marginal productivity of labor for each worker type given the input parameters.\n\nArguments\n\nlabor_input: An array of labor demand values. If nothing, it will be computed internally (given xT and q).\nθ: Blueprint scale parameter.\nκ: Blueprint shape parameter.\nz: Productivity parameter.\nαVec: An array of comparative advantage values.\nxT: (optional) An array representing the precomputed task thresholds. If not provided, it will be computed within the function.\nq: (optional) A scalar representing the precomputed quantity produced. If not provided, it will be computed within the function.\n\nReturns\n\nAn array representing the marginal productivity of labor for each worker type.\n\nIf labor_input is not provided, it will be computed using the q and unitInputDemand function based on the other parameters.\n\n\n\n\n\n","category":"function"},{"location":"#TaskBasedProduction.elasticity_sub_comp","page":"Home","title":"TaskBasedProduction.elasticity_sub_comp","text":"elasticity_sub_comp(labor_input::Union{AbstractArray{<:Real}, Nothing}, θ::Real, κ::Real, z::Real, αVec::AbstractArray{<:Real}; MPL=nothing, xT=nothing, q=nothing) -> (AbstractArray{<:Real}, AbstractArray{<:Real})\n\nCalculates the elasticity of substitution and complementarity for a given set of parameters.\n\nArguments\n\nlabor_input: An array of labor inputs of different types with H elements. If nothing, it will be computed internally given xT and q.\nθ: Blueprint scale parameter.\nκ: Blueprint shape parameter.\nz: Productivity parameter.\nαVec: An array of comparative advantage values with H elements.\nMPL: (optional) An array representing the marginal productivity of labor. If not provided, it will be computed within the function.\nxT: (optional) An array representing precomputed task thresholds. If not provided, it will be computed within the function.\nq: (optional) A scalar representing total production. If not provided, it will be computed within the function.\n\nReturns\n\nϵ_h_sub: Matrix of elasticity of substitution values for each worker type h (rows) relative to worker type h_prime (columns).\nϵ_h_compl: Matrix of elasticity of complementarity values for each worker type h (rows) relative to worker type h_prime (columns).\n\n\n\n\n\n","category":"function"},{"location":"#TaskBasedProduction.margProdLabor_general","page":"Home","title":"TaskBasedProduction.margProdLabor_general","text":"margProdLabor_general(labor_input::Union{AbstractArray{<:Real}, Nothing}, z::Real, b_g::Function, e_h::Vector{Function}; xT=nothing, q=nothing) -> AbstractArray{<:Real}\n\nCalculates the marginal productivity of labor for each worker type given the input parameters.\n\nArguments\n\nlabor_input: An array of labor inputs of different types with H elements. If nothing, it will be computed internally given xT and q.\nz: A productivity scalar.\nb_g: A task density function.\ne_h: A vector of comparative advantage functions.\nxT: (optional) An array representing the precomputed task thresholds. If not provided, it will be computed within the function.\nq: (optional) A scalar representing the precomputed quantity produced. If not provided, it will be computed within the function.\n\nReturns\n\nAn array representing the marginal productivity of labor for each worker type.\n\nIf labor_input is not provided, it will be computed using the q and unitInputDemand_general function based on the other parameters.\n\n\n\n\n\n","category":"function"},{"location":"#TaskBasedProduction.elasticity_sub_comp_general","page":"Home","title":"TaskBasedProduction.elasticity_sub_comp_general","text":"elasticity_sub_comp_general(labor_input::AbstractArray{<:Real}, z::Real, b_g::Function, e_h::Vector{Function}; MPL=nothing, xT=nothing, q=nothing) -> (AbstractArray{<:Real}, AbstractArray{<:Real})\n\nCalculates the elasticity of substitution and complementarity for a given set of parameters.\n\nArguments\n\nlabor_input: An array of labor inputs of different types with H elements. If nothing, it will be computed internally given xT and q.\nz: Productivity parameter.\nb_g: General task density function.\ne_h: Vector of comparative advantage functions.\nMPL: (optional) An array representing the marginal productivity of labor. If not provided, it will be computed within the function.\nxT: (optional) An array representing precomputed task thresholds. If not provided, it will be computed within the function.\n\n-q: (optional) A scalar of total output produced. If not provided, it will be computed within the function.\n\nReturns\n\nϵ_h_sub: Matrix of elasticity of substitution values for each worker type h (rows) relative to worker type h_prime (columns).\nϵ_h_compl: Matrix of elasticity of complementarity values for each worker type h (rows) relative to worker type h_prime (columns).\n\n\n\n\n\n","category":"function"},{"location":"#TaskBasedProduction.find_initial_guess","page":"Home","title":"TaskBasedProduction.find_initial_guess","text":"find_initial_guess(labor_input::AbstractArray{<:Real}, θ::Real, κ::Real, z::Real, αVec::AbstractArray{<:Real}; threshold::Real=1e-2)\n\nGenerate an initial guess for the optimization problem in prod_fun such that the implied labor demand is non-trivial.\n\nArguments\n\nlabor_input::AbstractArray{<:Real}: The observed labor input for each task.\nθ::Real: The scale parameter of the gamma distribution.\nκ::Real: The shape parameter of the gamma distribution.\nz::Real: A scaling factor for the labor input.\nαVec::AbstractArray{<:Real}: An array of task-specific parameters.\nthreshold::Real: The minimum acceptable labor demand for each task.\n\nReturns\n\ninitial_guess::Array{<:Real}: A vector containing the initial guess for the optimization, including the log of the initial production quantity q and the initial task thresholds xT.\n\nDescription\n\nThis function generates an initial guess for the optimization problem by:\n\nFixing the initial guess for q at 1.\nGenerating initial xT values using random percentiles from the gamma distribution defined by θ and κ.\nAdjusting the xT values iteratively to ensure the implied labor demand for each task is above the specified threshold.\n\nIf the implied labor demand for any task is below the threshold, the xT values are re-shuffled using the generate_initial_xT function. This process continues until the implied labor demand for all tasks is above the threshold or the maximum number of iterations is reached.\n\nIf the adjustment process encounters an error, new xT values are generated from scratch.\n\n\n\n\n\n","category":"function"},{"location":"#TaskBasedProduction.find_initial_guess_gen","page":"Home","title":"TaskBasedProduction.find_initial_guess_gen","text":"find_initial_guess_gen(labor_input::AbstractArray{<:Real}, z::Real, αVec::AbstractArray{<:Real}, pdf::Function; threshold::Real=1e-2, verbose::Bool=false)\n\nGenerate an initial guess for the optimization problem using a general density function such that the implied labor demand is non-trivial.\n\nArguments\n\nlabor_input::AbstractArray{<:Real}: An array of labor demand values. If nothing, it will be computed internally (given xT and q).\nz::Real: A scaling factor for the labor input.\nαVec::AbstractArray{<:Real}: An array of task-specific parameters.\npdf::Function: The general density function.\nthreshold::Real: The minimum acceptable labor demand for each task.\nverbose::Bool: Optional boolean flag to enable or disable verbose output for debugging.\n\nReturns\n\ninitial_guess::Array{<:Real}: A vector containing the initial guess for the optimization, including the log of the initial production quantity q and the initial task thresholds xT.\n\nDescription\n\nThis function generates an initial guess for the optimization problem by:\n\nFixing the initial guess for q at 1.\nGenerating initial xT values using random percentiles from the provided CDF function.\nAdjusting the xT values iteratively to ensure the implied labor demand for each task is above the specified threshold.\n\nIf the implied labor demand for any task is below the threshold, the xT values are re-shuffled using the generate_initial_xT function. This process continues until the implied labor demand for all tasks is above the threshold or the maximum number of iterations is reached.\n\nIf the adjustment process encounters an error, new xT values are generated from scratch.\n\nVerbose output can be enabled by setting the verbose parameter to true, which will print debug information during the percentile calculation.\n\n\n\n\n\n","category":"function"}]
}
