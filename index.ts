#! /usr/bin/env node
import inquirer from 'inquirer';
import chalk from 'chalk';

console.log(chalk.magentaBright.bold(`\n \t "Welcome To codeWithSahil - Age Calculator Application" \n`));


let condition = true;
while(condition){
    let answer=await inquirer.prompt([
        {
            name:'chocie',
            type:'list',
            message:chalk.greenBright.bold('Select Option'),
            choices:[
                'Check Age',
                'Exit'
            ]
        }
    ]);
    if(answer.chocie === 'Check Age'){
        let birth=await inquirer.prompt([
            {
                name:'birthYear',
                type:'number',
                message:'Enter Your Birth Year'
            }
        ]);
        let current=await inquirer.prompt([
            {
                name:'currentYear',
                type:'number',
                message:'Enter Current Year'
            }
        ]);
        console.log(chalk.yellowBright.bold('\n \t Your Age Is :',current.currentYear-birth.birthYear, 'Years \n'));
        
        
        

    }
    else{
        condition=false;
        console.log(chalk.gray.bold(`\n \t "Thank You For Using Our Application" \n`));
        
    }
}