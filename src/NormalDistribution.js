import numeric from 'numeric';

export default class NormalDistribution {
    constructor(mean, covariance) {
        this.mean = mean;
        this.covariance = covariance;
        this.dimension = mean.length;
    }
    getCovarianceEigendecomposition() {
        var eigen = numeric.eig(this.covariance);
        return {
            eigenvalues: eigen.lambda.x,
            eigenvectors: eigen.E.x
        };
    }
    sample() {
        var { eigenvalues, eigenvectors } = this.getCovarianceEigendecomposition();
        var lambda = numeric.diag(eigenvalues);
        var sqrtLambda = numeric.sqrt(lambda);
        var random = numeric.random([this.dimension, 1]);
        var scales = numeric.dot(sqrtLambda, eigenvalues);
        var noise = numeric.mul(scales, random);
        return numeric.add(this.mean, numeric.transpose([noise]));
    }
};
