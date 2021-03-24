module.exports = (sequelize, Sequelize) => {
    const QuoLog = sequelize.define("QuoLog", {
        QuoLogID: {
            type: Sequelize.INTEGER,
            primaryKey: true
        },
        QuotationID: {
            allowNull: true,
            type: Sequelize.INTEGER
        },
        CreateDate: {
            allowNull: true,
            type: Sequelize.DATE()
        }

    });

    return QuoLog;
}