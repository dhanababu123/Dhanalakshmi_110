package com.marticus.project.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.marticus.project.entity.ProjectEntity;




public interface ProjectRepo extends JpaRepository<ProjectEntity, Integer> {

	ProjectEntity findProjectById(int id);

	ProjectEntity findProjectByName(String name);

}
